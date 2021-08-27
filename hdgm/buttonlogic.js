
const color = getComputedStyle(document.body).getPropertyValue("--no-figuer-color");

document.querySelector("#fi1").addEventListener("click", function () {
    
    console.log("Iambutton");
    console.log("iam color" + color);

    let btn;
    let homes;
    let bases;

    for (let i = 0; i < 40; i++) {
        btn = document.querySelector("#fi" + i);
        console.log("Iam btn: " + btn)
        btn.style.backgroundColor = color;
    }
    for (let i = 0; i < 4; i++) {

        homes = document.querySelector("#rh" + i);
        bases = document.querySelector("#rb" + i);
        homes.style.backgroundColor = color;
        bases.style.backgroundColor = color;
        homes = document.querySelector("#gh" + i);
        bases = document.querySelector("#gb" + i);
        homes.style.backgroundColor = color;
        bases.style.backgroundColor = color;
        homes = document.querySelector("#bh" + i);
        bases = document.querySelector("#bb" + i);
        homes.style.backgroundColor = color;
        bases.style.backgroundColor = color;
        homes = document.querySelector("#yh" + i);
        bases = document.querySelector("#yb" + i);
        homes.style.backgroundColor = color;
        bases.style.backgroundColor = color;
    }
});