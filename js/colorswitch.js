
document.querySelector(".color-mode").addEventListener("click", function () {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.toggle("light-theme");
    switchbutton();
    } 
  else {
    document.body.classList.toggle("dark-theme");
    switchbutton();
  }
});

var isLight

function switchbutton(){
  if (isLight) {
    document.querySelector(".switch").classList.add("myclass1");
    document.querySelector(".switch").style.transform = 'translateX(0%)';
    isLight = false;
  }
  else {
    document.querySelector(".switch").classList.add("myclass1");
    document.querySelector(".switch").style.transform = 'translateX(100%)';
    isLight = true;
  }
}
 