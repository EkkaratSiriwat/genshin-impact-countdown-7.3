(() => {
  const controls = [...document.querySelectorAll('.site-language select')];
  const supported = new Set([...controls[0].options].map(option => option.value));
  const dictionaries = new Map();
  const loading = new Map();
  let requestedLanguage = 'th';
  let language = 'th';
  try {
    const saved = localStorage.getItem('teyvat-language');
    if (supported.has(saved)) requestedLanguage = saved;
  } catch {}

  const localizeEnglish = text => {
    const dictionary = dictionaries.get(language);
    return dictionary && Object.hasOwn(dictionary, text) ? dictionary[text] : text;
  };
  window.siteText = text => language === 'th' || typeof text !== 'string' ? text
    : localizeEnglish(Object.hasOwn(englishCopy, text) ? englishCopy[text] : text);
  window.siteFormat = (thai, english, ...values) =>
    (language === 'th' ? thai : localizeEnglish(english)).replace(/\{(\d+)\}/g, (_, index) => values[index]);

  window.registerSiteLocale = (locale, messages) => {
    if (supported.has(locale)) dictionaries.set(locale, messages);
  };
  function loadLocale(locale) {
    if (locale === 'th' || locale === 'en' || dictionaries.has(locale)) return Promise.resolve();
    if (!loading.has(locale)) {
      const pending = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'assets/locale-' + locale + '.js';
        script.onload = () => {
          script.remove();
          if (dictionaries.has(locale)) resolve();
          else reject(new Error('Language data did not register: ' + locale));
        };
        script.onerror = () => {
          script.remove();
          reject(new Error('Language data could not be loaded: ' + locale));
        };
        document.head.append(script);
      }).finally(() => loading.delete(locale));
      loading.set(locale, pending);
    }
    return loading.get(locale);
  }

  const labels = [];
  for (const root of document.querySelectorAll('main, #successors')) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement?.closest('select')) continue;
      const source = node.data;
      const original = source.trim();
      if (original) {
        labels.push(() => { node.data = source.replace(original, () => siteText(original)); });
      }
    }
    for (const node of root.querySelectorAll('[aria-label], [alt], [title]')) {
      for (const attr of ['aria-label', 'alt', 'title']) {
        const original = node.getAttribute(attr);
        if (original) {
          labels.push(() => node.setAttribute(attr, siteText(original)));
        }
      }
    }
  }

  function display() {
    document.documentElement.lang = language;
    labels.forEach(update => update());
    for (const control of controls) {
      control.value = language;
      control.setAttribute('aria-label', siteFormat('ภาษา', 'Language'));
    }
  }
  let choiceVersion = 0;
  async function selectLanguage(locale) {
    const version = ++choiceVersion;
    try {
      await loadLocale(locale);
    } catch (error) {
      console.warn(error);
      if (version === choiceVersion) display();
      return;
    }
    if (version !== choiceVersion) return;
    language = locale;
    try { localStorage.setItem('teyvat-language', locale); } catch {}
    display();
    document.dispatchEvent(new Event('site-language-change'));
  }
  controls.forEach(control => control.addEventListener('change', () => {
    if (supported.has(control.value)) selectLanguage(control.value);
  }));
  if (requestedLanguage === 'en') language = 'en';
  display();
  if (requestedLanguage !== language) selectLanguage(requestedLanguage);
})();
