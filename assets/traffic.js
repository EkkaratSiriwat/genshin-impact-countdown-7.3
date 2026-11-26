(() => {
  const allowedHost = location.protocol === "https:" || location.hostname === "localhost";
  if (!allowedHost) return;

  let digits = "";
  let lastKey = 0;
  document.addEventListener("keydown", async event => {
    if (event.repeat || event.ctrlKey || event.metaKey || event.altKey ||
        event.target.closest?.("input, textarea, select, [contenteditable]")) return;
    const now = performance.now();
    if (now - lastKey > 4500 || !/^[0-9]$/.test(event.key)) digits = "";
    if (!/^[0-9]$/.test(event.key)) return;
    lastKey = now;
    digits += event.key;
    if (digits.length !== 8) return;
    const code = digits;
    digits = "";
    try {
      const response = await fetch("/api/traffic?action=login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({code})
      });
      if (response.ok) location.assign("/admin.html");
    } catch {}
  });

  const hall = document.querySelector("#successors");
  const picker = document.querySelector("#relay-picker");
  const reveal = document.querySelector("#region-reveal");
  let visitor = crypto.randomUUID();
  try {
    visitor = localStorage.getItem("teyvat-visitor") || visitor;
    localStorage.setItem("teyvat-visitor", visitor);
  } catch {}

  function visibleSection() {
    if (document.hidden) return null;
    if (picker.open) return "planner";
    if (hall.getBoundingClientRect().top <= innerHeight / 2) {
      return hall.dataset.verdict ? "results" : "hall";
    }
    return reveal.hidden ? "countdown" : "regions";
  }

  let section = visibleSection();
  let previous = performance.now();
  let pending = {};
  function sample() {
    const now = performance.now();
    if (section) pending[section] = (pending[section] || 0) + Math.min(now - previous, 30000);
    previous = now;
    section = visibleSection();
  }

  function send() {
    sample();
    const duration = Object.fromEntries(Object.entries(pending).map(([key, ms]) => [key, Math.round(ms)]));
    pending = {};
    const body = JSON.stringify({visitor, event: crypto.randomUUID(), duration});
    const payload = new Blob([body], {type: "application/json"});
    if (!navigator.sendBeacon("/api/traffic", payload)) {
      fetch("/api/traffic", {method: "POST", body: payload, keepalive: true}).catch(() => {});
    }
  }

  const observer = new MutationObserver(sample);
  observer.observe(picker, {attributes: true, attributeFilter: ["open"]});
  observer.observe(hall, {attributes: true, attributeFilter: ["data-verdict"]});
  observer.observe(reveal, {attributes: true, attributeFilter: ["hidden"]});
  window.addEventListener("scroll", sample, {passive: true});
  document.addEventListener("visibilitychange", send);
  window.addEventListener("pagehide", send);
  setInterval(() => { if (!document.hidden) send(); }, 30000);
  if (!document.hidden) send();
})();
