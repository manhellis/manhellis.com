const menuToggle = document.getElementById('menu-toggle');
const sideNav = document.getElementById('side-nav');
const closeNavButton = document.getElementById('close-nav');

menuToggle.addEventListener('click', () => {
  sideNav.classList.toggle('show');
  menuToggle.textContent = sideNav.classList.contains('show') ? '✕' : '☰';
});

closeNavButton.addEventListener('click', () => {
  sideNav.classList.remove('show');
  menuToggle.textContent = '☰';
});
