const { createHash, randomBytes, timingSafeEqual } = require("node:crypto");

const sections = ["countdown", "regions", "hall", "planner", "results"];
const uuid = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i;
const retention = 35 * 86400;
const sessionAge = 8 * 3600;
const record = `
  if not redis.call('SET', KEYS[1], '1', 'EX', 3600, 'NX') then return 0 end
  redis.call('PFADD', KEYS[2], ARGV[1])
  redis.call('EXPIRE', KEYS[2], ARGV[2])
  for i=3,#ARGV,2 do
    redis.call('HINCRBY', KEYS[3], ARGV[i], ARGV[i+1])
  end
  redis.call('EXPIRE', KEYS[3], ARGV[2])
  return 1
`;
const rateLimit = `
  local attempts = redis.call('INCR', KEYS[1])
  if attempts == 1 then redis.call('EXPIRE', KEYS[1], 900) end
  return attempts
`;

const digest = value => createHash("sha256").update(value).digest();

async function redis(command) {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (!url || !token) throw new Error("Traffic storage is not configured");
  const response = await fetch(url, {
    method: "POST",
    headers: {Authorization: `Bearer ${token}`, "Content-Type": "application/json"},
    body: JSON.stringify(command),
    signal: AbortSignal.timeout(5000)
  });
  const payload = await response.json();
  if (!response.ok || payload.error) throw new Error("Traffic storage request failed");
  return payload.result;
}

function dateKey(daysAgo = 0) {
  return new Date(Date.now() + 7 * 3600000 - daysAgo * 86400000).toISOString().slice(0, 10);
}

module.exports = async function traffic(req, res) {
  res.setHeader("Cache-Control", "no-store");
  const action = req.query.action;
  const sameOrigin = req.headers.origin === `https://${req.headers.host}` ||
    req.headers.origin === `http://${req.headers.host}` && !process.env.VERCEL;
  if (req.method === "POST" && !sameOrigin) return res.status(403).end();
  try {
    if (action === "login" && req.method === "POST") {
      const expected = process.env.TRAFFIC_ADMIN_PIN;
      if (!expected) return res.status(503).end();
      const code = req.body?.code;
      if (typeof code !== "string" || !/^\d{8}$/.test(code)) return res.status(400).end();
      const ip = String(req.headers["x-vercel-forwarded-for"] || req.socket.remoteAddress || "unknown");
      const attempts = await redis(["EVAL", rateLimit, 1, `traffic:login:${digest(ip).toString("hex")}`]);
      if (attempts > 8) return res.status(429).end();
      if (!timingSafeEqual(digest(code), digest(expected))) return res.status(401).end();
      const token = randomBytes(32).toString("hex");
      await redis(["SET", `traffic:admin:${digest(token).toString("hex")}`, "1", "EX", sessionAge]);
      res.setHeader("Set-Cookie", `traffic_admin=${token}; Path=/api/traffic; Max-Age=${sessionAge}; HttpOnly; SameSite=Strict${process.env.VERCEL ? "; Secure" : ""}`);
      return res.status(204).end();
    }

    if (action === "summary" && req.method === "GET") {
      const token = req.headers.cookie?.match(/(?:^|;\s*)traffic_admin=([0-9a-f]{64})(?:;|$)/)?.[1];
      if (!token || !await redis(["GET", `traffic:admin:${digest(token).toString("hex")}`])) {
        return res.status(401).end();
      }
      const dates = Array.from({length: 7}, (_, i) => dateKey(i));
      const [visitors, today, ...daily] = await Promise.all([
        redis(["PFCOUNT", ...dates.map(date => `traffic:visitors:${date}`)]),
        redis(["PFCOUNT", `traffic:visitors:${dates[0]}`]),
        ...dates.map(date => redis(["HMGET", `traffic:duration:${date}`, ...sections]))
      ]);
      const sectionsMs = Object.fromEntries(sections.map((section, i) =>
        [section, daily.reduce((total, values) => total + Number(values[i] || 0), 0)]));
      return res.json({visitors, today, sectionsMs});
    }

    if (action || req.method !== "POST") return res.status(405).end();
    const {visitor, event, duration} = req.body || {};
    if (typeof visitor !== "string" || !uuid.test(visitor) ||
        typeof event !== "string" || !uuid.test(event) || !duration || typeof duration !== "object") {
      return res.status(400).end();
    }
    const values = sections.map(section => duration[section] ?? 0);
    if (!values.every(value => Number.isInteger(value) && value >= 0 && value <= 60000) ||
        values.reduce((total, value) => total + value, 0) > 60000) return res.status(400).end();
    const date = dateKey();
    await redis(["EVAL", record, 3, `traffic:event:${event}`, `traffic:visitors:${date}`,
      `traffic:duration:${date}`, visitor, retention, ...sections.flatMap((section, i) => [section, values[i]])]);
    return res.status(204).end();
  } catch {
    return res.status(503).end();
  }
};
