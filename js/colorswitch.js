
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
  document.querySelector(".color-switch-circle").classList.add("myswitch");
  if (isLight) {
    document.querySelector(".color-switch-circle").classList.add("myswitch");
    document.querySelector(".color-switch-circle").style.transform = "translateX(0px)";
    document.querySelector(".color-switch-circle").style.fill = "rgb(136, 136, 136)";
    isLight = false;
  }
  else {
    document.querySelector(".color-switch-circle").classList.add("myswitch");
    document.querySelector(".color-switch-circle").style.transform = "translateX(45px)";
    document.querySelector(".color-switch-circle").style.fill = "rgb(54, 54, 54)";
    isLight = true;
  }
}
 