const DEFAULT_THEME = 'default';

const storedTheme = localStorage.getItem('theme') || DEFAULT_THEME;
let cssLink = document.createElement('link');
cssLink.id = 'styles';
cssLink.rel = 'stylesheet';
cssLink.href = `/css/${storedTheme}.css`;
document.head.appendChild(cssLink);

function setTheme(theme) {
  localStorage.setItem('theme', theme);
  document.getElementById('styles').href = `/css/${theme}.css`;
}

function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || DEFAULT_THEME;
  if (currentTheme === 'default') {
    setTheme('fun');
  } else {
    setTheme('default');
  }
}
