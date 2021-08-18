
document.querySelector(".color-mode").addEventListener("click", function () {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.toggle("light-theme");
  } 
  else {
    document.body.classList.toggle("dark-theme");
  }
});
 