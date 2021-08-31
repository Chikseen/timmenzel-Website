

let home = document.getElementById("home");
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let skills = document.getElementById("skills");
let exp = document.getElementById("edu-exp");

let pi = document.getElementById("position-indicator");

let currentWindow;
let homeY;
let aboutY;
let projectsY;
let skillsY;
let expY 

function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

window.addEventListener("scroll", throttle(parallax,10));

async function parallax() {

  var scrolled = window.pageYOffset;

  if (window.pageYOffset >= 750) {
    document.querySelector(".layer1").style.transform = "translateY(-1500px)";
    document.querySelector(".layer2").style.transform = "translateY(-1600px)";
    document.querySelector(".layer3").style.transform = "translateY(-1700px)";
    document.querySelector(".layer4").style.transform = "translateY(-1800px)";
    if (window.pageYOffset >= 1000) {
      document.querySelector(".layer5").style.transform = "translateY(-1900px)";
    }
  }

  else {
    var mbg = document.querySelector(".layer1");
    var st1 = document.querySelector(".layer2");
    var st2 = document.querySelector(".layer3");
    var st3 = document.querySelector(".layer4");
    var st4 = document.querySelector(".layer5");

    var layerbg = (scrolled * 0.8) + "px"
    var layer1 = (scrolled * 0.3) + "px"
    var layer2 = (scrolled * 0.5) + "px"
    var layer3 = (scrolled * -0.3) + "px"
    var layer4 = (scrolled * -1.3) + "px"

    mbg.classList.add("myclass");
    mbg.style.transform = "translateY(" + layerbg + ")";

    st1.classList.add("myclass");
    st1.style.transform = "translateY(" + layer1 + ")";

    st2.classList.add("myclass");
    st2.style.transform = "translateY(" + layer2 + ")";

    st3.classList.add("myclass");
    st3.style.transform = "translateY(" + layer3 + ")";

    st4.classList.add("myclass");
    st4.style.transform = "translateY(" + layer4 + ")";
  }
  displayIndicator(scrolled);
};


async function displayIndicator(scrolled) {

  currentWindow = window.innerHeight;
  homeY = home.scrollHeight + 750;
  aboutY = about.scrollHeight + homeY;
  projectsY = projects.scrollHeight + aboutY;
  skillsY = skills.scrollHeight + projectsY;
  expY = exp.scrollHeight + skillsY;

  /*TO-DO There has to be a better way to this*/

  if ((0 <= scrolled) && (scrolled < homeY)) {
    pi.style.left = "0px";

    if ((scrolled + currentWindow) > (projectsY)) {
      pi.style.width = "80%";
    }
    else if ((scrolled + currentWindow) > (aboutY)) {
      pi.style.width = "60%";
    }
    else if ((scrolled + currentWindow) > (homeY)) {
      pi.style.width = "40%";
    }
    else {
      pi.style.width = "20%";
    }
  }
  else if (scrolled < aboutY) {
    pi.style.left = "20%";

    if ((scrolled + currentWindow) > (skillsY)) {
      pi.style.width = "80%";
    }
    else if ((scrolled + currentWindow) > (projectsY)) {
      pi.style.width = "60%";
    }
    else if ((scrolled + currentWindow) > (aboutY)) {
      pi.style.width = "40%";
    }
    else {
      pi.style.width = "20%";
    }
  }
  else if (scrolled < projectsY) {
    pi.style.left = "40%";

    if ((scrolled + currentWindow) > (skillsY)) {
      pi.style.width = "60%";
    }
    else if ((scrolled + currentWindow) > (projectsY)) {
      pi.style.width = "40%";
    }
    else {
      pi.style.width = "20%";
    }
  }
  else if (scrolled < skillsY) {
    pi.style.left = "60%";

    if ((scrolled + currentWindow) > (skillsY)) {
      pi.style.width = "40%";
    }
    else {
      pi.style.width = "20%";
    }
  }
  else if (scrolled < expY) {
    pi.style.left = "80%";
    pi.style.width = "20%";
  }
}