(() => {
  let language = 'th';
  try {
    if (localStorage.getItem('teyvat-language') === 'en') language = 'en';
  } catch {}

  window.siteText = text => language === 'en' && typeof text === 'string'
    ? (Object.hasOwn(englishCopy, text) ? englishCopy[text] : text)
    : text;
  window.siteFormat = (thai, english, ...values) =>
    (language === 'en' ? english : thai).replace(/\{(\d+)\}/g, (_, index) => values[index]);

  const controls = [...document.querySelectorAll('.site-language select')];
  const labels = [];
  for (const root of document.querySelectorAll('main, #successors')) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const source = node.data;
      const original = source.trim();
      if (Object.hasOwn(englishCopy, original)) {
        labels.push(() => { node.data = source.replace(original, () => siteText(original)); });
      }
    }
    for (const node of root.querySelectorAll('[aria-label], [alt], [title]')) {
      for (const attr of ['aria-label', 'alt', 'title']) {
        const original = node.getAttribute(attr);
        if (original && Object.hasOwn(englishCopy, original)) {
          labels.push(() => node.setAttribute(attr, siteText(original)));
        }
      }
    }
  }

  function display() {
    document.documentElement.lang = language;
    controls.forEach(control => { control.value = language; });
    labels.forEach(update => update());
  }
  controls.forEach(control => control.addEventListener('change', () => {
    language = control.value === 'en' ? 'en' : 'th';
    try { localStorage.setItem('teyvat-language', language); } catch {}
    display();
    document.dispatchEvent(new Event('site-language-change'));
  }));
  display();
})();
