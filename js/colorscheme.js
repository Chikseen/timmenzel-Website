
let count = getRandomInt(0,5);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  changeBackground(parseInt(Math.floor(Math.random() * (max - min)) + min));
}

document.querySelector(".mainbackground").addEventListener("click", function () {
  if (count < 4) {
    count++;
  }
  else {
    count = 0;
  }
  changeBackground(count);
});

function changeBackground(cbto) {
  switch (cbto) {
    case 0:
      deselectAll();
      break;
    case 1:
      deselectAll();
      document.body.classList.toggle("redscheme", true);
      break;
    case 2:
      deselectAll();
      document.body.classList.toggle("greenscheme", true);
      break;
    case 3:
      deselectAll();
      document.body.classList.toggle("yellowscheme", true);
      break;
    case 4:
      deselectAll();
      document.body.classList.toggle("monoscheme", true);
      break;
  }
}

function deselectAll() {
  document.body.classList.toggle("redscheme", false);
  document.body.classList.toggle("greenscheme", false);
  document.body.classList.toggle("yellowscheme", false);
  document.body.classList.toggle("monoscheme", false);
}
