// ['click', 'ontouchstart'].forEach( evt => document.querySelectorAll('#hamburger').addEventListener(evt, () => {
//   document.querySelector('.nav-links').classList.toggle('expanded');
// }));

const initApp = () => {
  document.removeEventListener('DOMContentLoaded', initApp)
  const hamburgerBtn = document.getElementById('hamburger_icon');
  const mobileMenu = document.getElementById('mobile-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
    hamburgerBtn.classList.toggle('toggle-btn')
  }

  hamburgerBtn.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener("DOMContentLoaded", initApp);