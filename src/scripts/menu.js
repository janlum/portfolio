['click', 'ontouchstart'].forEach( evt => document.querySelector('.hamburger').addEventListener(evt, () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
}));
