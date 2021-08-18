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
  var mbg = document.querySelector(".mainbackground");
  var st1 = document.querySelector(".rectclass1");
  var st2 = document.querySelector(".rectclass2");
  var st3 = document.querySelector(".rectclass3");
  var st4 = document.querySelector(".rectclass4");

	var layerbg = (scrolled * 0.2) + 'px'
  var layer1 = (scrolled * 0.5) + 'px'
  var layer2 = (scrolled * 0.6) + 'px'
  var layer3 = (scrolled * -0.3) + 'px'
  var layer4 = (scrolled * -0.6) + 'px'

  mbg.classList.add("myclass");
  mbg.style.transform = 'translateY(' + layerbg + ')';

  st1.classList.add("myclass");
  st1.style.transform = 'translateY(' + layer1 + ')';

  st2.classList.add("myclass");
  st2.style.transform = 'translateY(' + layer2 + ')';

  st3.classList.add("myclass");
  st3.style.transform = 'translateY(' + layer3 + ')';

  st4.classList.add("myclass");
  st4.style.transform = 'translateY(' + layer4 + ')';
};