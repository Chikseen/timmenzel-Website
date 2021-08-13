// Parallax effect
// Adapted from @ilonacodes article ->  https://link.medium.com/7fFiON6Q1X

// Update : added throttle to increase performance
window.addEventListener('scroll', throttle(parallax, 14));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

function parallax() {
  var scrolled = window.pageYOffset;
  var parallax = document.querySelector(".rectclass1");
	var coords = (scrolled * 0.5) + 'px'
  parallax.style.transform = 'translateY(' + coords + ')';
};