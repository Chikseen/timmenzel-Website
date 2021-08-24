window.addEventListener('scroll', throttle(parallax, 14));

function throttle(fn, wait) {
  var time = Date.now();
    return function () {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
};

function parallax() {
  var scrolled = window.pageYOffset;

  if (window.pageYOffset >= 750) {
    document.querySelector(".layer1").style.transform = 'translateY(-1500px)';
    document.querySelector(".layer2").style.transform = 'translateY(-1600px)';
    document.querySelector(".layer3").style.transform = 'translateY(-1700px)';
    document.querySelector(".layer4").style.transform = 'translateY(-1800px)';
    if (window.pageYOffset >= 1000) {
      document.querySelector(".layer5").style.transform = 'translateY(-1900px)';
    }
  }
  
  else{
    var mbg = document.querySelector(".layer1");
    var st1 = document.querySelector(".layer2");
    var st2 = document.querySelector(".layer3");
    var st3 = document.querySelector(".layer4");
    var st4 = document.querySelector(".layer5");

    var layerbg = (scrolled * 0.8) + 'px'
    var layer1 = (scrolled * 0.3) + 'px'
    var layer2 = (scrolled * 0.5) + 'px'
    var layer3 = (scrolled * -0.3) + 'px'
    var layer4 = (scrolled * -1.3) + 'px'

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
  }
};