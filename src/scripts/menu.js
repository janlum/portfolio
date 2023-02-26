['click', 'ontouchstart'].forEach( evt => document.querySelector('.hamburger').addEventListener(evt, () => {
  console.log("event start")
  // var touchobj = e.changedTouches[0]; 
  // startx = parseInt(touchobj.clientX); 
  // starty = parseInt(touchobj.clientY); 
  document.querySelector('.nav-links').classList.toggle('expanded');
  console.log("event start done")
}));
