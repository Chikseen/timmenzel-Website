
let count = 0;

document.querySelector(".mainbackground").addEventListener("click", function () {

  if (count < 4) {
    count++;
  }
  else {
    count = 0;
  }

  switch (count) {
    case 0:
      console.log("0 + blue");
      document.body.classList.toggle("monoscheme");
      break;
    case 1:
      console.log("1 + red");
      document.body.classList.toggle("redscheme");
      break;
    case 2:
      console.log("2 + green");
      document.body.classList.toggle("redscheme");
      document.body.classList.toggle("greenscheme");
      break;
    case 3:
      console.log("3 + yellow");
      document.body.classList.toggle("greenscheme");
      document.body.classList.toggle("yellowscheme");
      break;
    case 4:
      console.log("4 + mono");
      document.body.classList.toggle("yellowscheme");
      document.body.classList.toggle("monoscheme");
      break;
  }
});
