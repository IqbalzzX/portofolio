// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
const toggleIcon = document.querySelector('.toggle-icon');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.classList.add('fa-sun');
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
    toggleIcon.classList.remove('fa-sun');
    toggleIcon.classList.add('fa-moon');
  }
});

// Pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  darkToggle.checked = true;
  html.classList.add('dark');
  toggleIcon.classList.remove('fa-moon');
  toggleIcon.classList.add('fa-sun');
} else {
  darkToggle.checked = false;
  html.classList.remove('dark');
  toggleIcon.classList.remove('fa-sun');
  toggleIcon.classList.add('fa-moon');
}
