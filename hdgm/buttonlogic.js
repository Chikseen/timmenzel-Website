

const color = '--no-figuer-color';

function setFI(color) {
    for (let i = 0; i < 40; i++)  {
        let btn = document.querySelector('#fi' + i);
    btn.style.backgroundColor = color;
    }
}
