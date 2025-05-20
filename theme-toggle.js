// Theme Toggle Script :3
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Theme';
toggleButton.className = 'theme-toggle';
document.body.appendChild(toggleButton);

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  toggleButton.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
};

// Check for saved theme or system preference
const savedTheme = localStorage.getItem('theme') || 
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
});