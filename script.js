// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Light/dark toggle (respects system preference by default)
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;

function applyTheme(mode) {
  if (mode === 'dark') root.classList.add('theme-dark');
  else root.classList.remove('theme-dark');
  localStorage.setItem('theme', mode);
}

// Initialize from localStorage or system preference
const saved = localStorage.getItem('theme');
if (saved) applyTheme(saved);
toggle.addEventListener('click', () => {
  const next = root.classList.contains('theme-dark') ? 'light' : 'dark';
  applyTheme(next);
});
