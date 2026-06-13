(function () {
  const STORAGE_KEY = 'theme-preference';

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const checkbox = document.getElementById('theme-toggle-input'); // ✅ was 'icon', now 'checkbox'
    if (checkbox) checkbox.checked = (theme === 'dark');
  }

  applyTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('theme-toggle-input'); // ✅ was 'theme-toggle'
    if (!checkbox) return;

    checkbox.addEventListener('change', function () { // ✅ was 'click', now 'change'
      const next = this.checked ? 'dark' : 'light';
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  });
})();