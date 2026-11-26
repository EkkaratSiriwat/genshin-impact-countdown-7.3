function createResetErosion(scene, seededRandom) {
  const preview = scene.querySelector('.erosion-preview');
  const toggle = preview.querySelector('summary');
  const openLabel = toggle.textContent;
  const slider = preview.querySelector('input');
  const dayLabel = preview.querySelector('output');
  const firstDay = Number(slider.max);
  const stages = firstDay + 1;
  const finalStrength = (stages - 5) / stages; // The former five-days-left appearance.
  const reveal = scene.querySelector('.region-reveal');
  const story = scene.querySelector('.region-memory');
  const vision = scene.querySelector('.region-vision');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const travel = 2;
  const maskHeight = 80;
  const tints = ['#f4f5ff', '#d6edff', '#9fd6f1', '#ded5ff'];
  scene.style.setProperty('--erosion-sheet-height', (stages + 1) * 100 + '%');

  // Wrap slices in both dimensions to relocate the old cuts without changing
  // their area. The last vertical shift staggers the joins between rows.
  function makeSurface(host, maskOwner, seed, width) {
    const random = seededRandom(seed);
    const scatter = seededRandom(seed + 3109);
    const rowShift = new Uint16Array(maskHeight);
    for (let y = 0; y < maskHeight;) {
      const end = y + 5 + Math.floor(scatter() * 8);
      rowShift.fill(Math.floor(scatter() * width), y, end);
      y = end;
    }
    const columnShift = new Uint8Array(width);
    for (let x = 0; x < width;) {
      const end = x + 2 + Math.floor(scatter() * 3);
      columnShift.fill(Math.floor(scatter() * maskHeight), x, end);
      x = end;
    }
    const lostAt = new Uint8Array(width * maskHeight);
    const lanes = [];
    const phase = random() * 2 * Math.PI;
    for (let x = 0; x < width;) {
      const strip = Math.min(width - x, 1 + Math.floor(random() ** 1.5 * 4));
      const center = (x + strip / 2) / width;
      const ridge = .13 * Math.cos(center * 11 + phase);
      const start = .24 + ridge + (random() - .5) * .2 + 2.35 * (random() - .5) ** 3;
      const yShift = Math.floor(scatter() * maskHeight);
      for (let sourceY = 0; sourceY < maskHeight; sourceY++) {
        const y = (sourceY + yShift) % maskHeight;
        const threshold = start + (sourceY + .5) / (maskHeight * travel);
        const firstLostStage = Math.max(1, Math.ceil(threshold * stages / finalStrength));
        for (let dx = 0; dx < strip; dx++) {
          const column = (x + dx + rowShift[y]) % width;
          const row = (y + columnShift[column]) % maskHeight;
          lostAt[row * width + column] = firstLostStage;
        }
      }
      lanes.push({
        x: x + strip / 2, yShift, start, phase: random(), period: 1400 + random() * 1350,
        length: .07 + random() ** 2 * .36, width: .8 + random() ** 2 * 1.4,
        lift: .22 + random() * .78, tint: tints[Math.floor(random() * tints.length)]
      });
      x += strip;
    }

    // Bake all days once. Previewing a day selects a frame without encoding
    // new textures while scrolling the slider. Keep a legible trace of the text.
    const mask = document.createElement('canvas');
    mask.width = width;
    mask.height = maskHeight * (stages + 1);
    const ink = mask.getContext('2d');
    const sheet = ink.createImageData(mask.width, mask.height);
    const remnantAlpha = Math.round(255 * (host === story ? .44 : .16));
    for (let stage = 0; stage <= stages; stage++) {
      let alpha = (stages - stage) * lostAt.length * 4 + 3;
      for (let pixel = 0; pixel < lostAt.length; pixel++, alpha += 4) {
        sheet.data[alpha] = stage >= lostAt[pixel] ? remnantAlpha : 255;
      }
    }
    ink.putImageData(sheet, 0, 0);
    maskOwner.style.setProperty('--material-mask', 'url("' + mask.toDataURL() + '")');
    const canvas = document.createElement('canvas');
    canvas.className = 'erosion-filaments';
    canvas.setAttribute('aria-hidden', 'true');
    host.append(canvas);
    return {host, canvas, ctx: canvas.getContext('2d'), lanes, rowShift, columnShift,
      maskWidth: width, width: 0, height: 0, lines: []};
  }

  const starSurfaces = [...scene.querySelectorAll('.region-star:not([data-region="nod-krai"])')].map((star, i) =>
    makeSurface(star.querySelector('.star-glyph'), star, 720 + i, 156));
  const storySurface = makeSurface(story, story, 1926, 352);
  const surfaces = [...starSurfaces, storySurface, makeSurface(vision, vision, 2026, 520)];

  let liveDay, target, level = 0, from = 0, changedAt = 0, lastFrame = -Infinity;
  let visibleStrength = 0;
  let dirty = true;

  function measure(surface) {
    const {host, canvas, ctx} = surface;
    const width = host.clientWidth, height = host.clientHeight;
    surface.width = width;
    surface.height = height;
    if (!width || !height) return;
    surface.lift = Math.min(host === vision ? 74 : 50, height * .5);
    const visualHeight = Math.ceil(height + surface.lift);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.ceil(width * dpr);
    canvas.height = Math.ceil(visualHeight * dpr);
    canvas.style.height = visualHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (host === story) {
      // Emit from the actual wrapped text lines, including short chapter
      // titles. Empty space beside a paragraph should never shed particles.
      const box = host.getBoundingClientRect();
      const lines = [];
      const range = document.createRange();
      for (const text of host.querySelectorAll('h2, .region-epithet, h3:not([hidden]), p')) {
        range.selectNodeContents(text);
        for (const line of range.getClientRects()) {
          lines.push({left: line.left - box.left, right: line.right - box.left,
            top: line.top - box.top, bottom: line.bottom - box.top});
        }
      }
      surface.lines = lines;
    }
    dirty = true;
  }
  const resize = new ResizeObserver(entries => {
    for (const {target: host} of entries) measure(surfaces.find(surface => surface.host === host));
  });
  for (const surface of surfaces) resize.observe(surface.host);

  function applyLevel(value) {
    level = value;
    const stage = Math.round(value * stages / finalStrength);
    visibleStrength = stage * finalStrength / stages;
    scene.toggleAttribute('data-eroding', value > 0);
    scene.style.setProperty('--erosion-position', (1 - stage / stages) * 100 + '%');
    scene.style.setProperty('--sky-remnant', 1 - .96 * value ** 1.45);
    dirty = true;
  }

  function selectDay(days) {
    const next = finalStrength * Math.max(0, Math.min(1, (stages - days) / stages));
    if (next === target) return;
    const initial = target === undefined;
    from = level;
    changedAt = performance.now();
    target = next;
    if (initial || reducedMotion.matches) applyLevel(target);
  }

  function paintSurface(surface, now) {
    const {ctx, width, height, lift} = surface;
    if (!width || !height) return;
    ctx.clearRect(0, 0, width, Math.ceil(height + lift));
    for (const lane of surface.lanes) {
      const edge = (visibleStrength - lane.start) * travel;
      if (edge <= 0 || edge >= 1) continue;
      // Each plume lifts off at the same scattered edge as its missing pixels.
      const row = (edge * maskHeight + lane.yShift) % maskHeight;
      const column = (lane.x + surface.rowShift[Math.floor(row)]) % surface.maskWidth;
      const relativeX = column / surface.maskWidth;
      const relativeY = ((row + surface.columnShift[Math.floor(column)]) % maskHeight) / maskHeight;
      const x = relativeX * width;
      const y = relativeY * height;
      let weight = 1;
      if (surface === storySurface) {
        if (!surface.lines.some(r => x >= r.left && x <= r.right && y >= r.top && y <= r.bottom)) continue;
      } else {
        weight = Math.sqrt(Math.max(0, 1 - ((relativeX - .5) * 2.6) ** 2 - ((relativeY - .5) * 1.95) ** 2));
        if (!weight) continue;
      }
      const phase = (now / lane.period + lane.phase) % 1;
      const root = lift + y;
      const tip = root - phase * lift * lane.lift;
      const length = lane.length * lift;
      const brightness = weight * (1 - .7 * level ** 5);
      ctx.fillStyle = lane.tint;
      ctx.globalAlpha = brightness * (.4 + .36 * (1 - phase));
      ctx.fillRect(x, root - length * .76, lane.width, length * .76);
      ctx.fillStyle = '#eefaff';
      ctx.globalAlpha = brightness * .85;
      ctx.fillRect(x, root - 2.2, lane.width, 2.2);
      ctx.fillStyle = lane.tint;
      ctx.globalAlpha = brightness * Math.sin(phase * Math.PI);
      ctx.fillRect(x, tip - length, lane.width, length);
      ctx.fillRect(x, tip - length - 4, lane.width, 1.8);
    }
    ctx.globalAlpha = 1;
  }

  // The countdown already pauses this frame loop when hidden or offscreen.
  function paint(now) {
    if (target === undefined || (!dirty && now - lastFrame < 1000 / 24)) return;
    if (level !== target) {
      const t = reducedMotion.matches ? 1 : Math.min(1, Math.max(0, (now - changedAt) / 650));
      applyLevel(t === 1 ? target : from + (target - from) * t * t * (3 - 2 * t));
    }
    // Opening the test explicitly plays the effect. Return to the visitor's
    // motion preference as soon as the preview closes.
    const still = reducedMotion.matches && !preview.open;
    if (!level || (still && !dirty)) return;
    lastFrame = now;
    const activeSurfaces = reveal.hidden || reveal.dataset.region === 'nod-krai' ? starSurfaces : surfaces;
    for (const surface of activeSurfaces) paintSurface(surface, still ? 0 : now);
    dirty = false;
  }
  reducedMotion.addEventListener('change', () => { dirty = true; });

  function previewDay() {
    const days = firstDay - Number(slider.value);
    const label = days === 0 ? 'วันสุดท้าย' : 'เหลือ ' + days + ' วัน';
    dayLabel.textContent = label;
    slider.setAttribute('aria-valuetext', label);
    selectDay(days);
  }
  preview.hidden = false;
  preview.addEventListener('toggle', () => {
    dirty = true;
    toggle.textContent = preview.open ? 'กลับสู่วันจริง' : openLabel;
    if (preview.open) {
      slider.value = '0';
      previewDay();
    } else {
      selectDay(liveDay);
    }
  });
  slider.addEventListener('input', previewDay);
  document.addEventListener('keydown', event => {
    if (preview.open && event.key === 'Escape') {
      event.preventDefault();
      preview.open = false;
      toggle.focus({preventScroll: true});
    }
  });

  return {
    paint,
    measureStory: () => measure(storySurface),
    setDaysRemaining(days) {
      if (liveDay === days) return;
      liveDay = days;
      if (!preview.open) selectDay(days);
    }
  };
}
