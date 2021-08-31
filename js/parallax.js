

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

window.addEventListener("scroll", throttle(parallax, 5));

function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

async function parallax() {

  var scrolled = window.pageYOffset;

  let mbg = document.getElementById("l1");
  let st1 = document.getElementById("l2");
  let st2 = document.getElementById("home");
  let st3 = document.getElementById("l4");
  let st4 = document.getElementById("l5");


  if (window.pageYOffset >= 750) {
    mbg.style.transform = "translateY(-1500px)";
    st1.style.transform = "translateY(-1600px)";
    st2.style.transform = "translateY(-1700px)";
    st3.style.transform = "translateY(-1800px)";
    if (window.pageYOffset >= 1000) {
      st4.style.transform = "translateY(-1900px)";
    }
  }

  else {

    mbg.classList.add("myclass");
    mbg.style.transform = "translateY(" + (scrolled * 0.8) + "px)";

    st1.classList.add("myclass");
    st1.style.transform = "translateY(" + (scrolled * 0.3) + "px)";

    st2.classList.add("myclass");
    st2.style.transform = "translateY(" + (scrolled * 0.5) + "px)";

    st3.classList.add("myclass");
    st3.style.transform = "translateY(" + (scrolled * -0.3) + "px)";

    st4.classList.add("myclass");
    st4.style.transform = "translateY(" + (scrolled * -1.3) + "px)";
  }
  await displayIndicator(scrolled);
};


async function displayIndicator(scrolled) {

  currentWindow = window.innerHeight;
  //Scrolled -> currentwindow defines the upper und lower position of the current screen

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