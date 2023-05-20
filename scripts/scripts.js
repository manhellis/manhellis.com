const menuToggle = document.getElementById('menu-toggle');
const sideNav = document.getElementById('side-nav');

menuToggle.addEventListener('click', () => {
  sideNav.classList.toggle('show');
  menuToggle.textContent = sideNav.classList.contains('show') ? '✕' : '☰';
});

