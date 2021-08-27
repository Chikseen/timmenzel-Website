
window.addEventListener("resize", function(event){

    let body = document.querySelector("body");
    let width = body.clientWidth;
    let height = body.clientHeight;

    console.log(width + " W - H " +  height);

    
    document.getElementById("polygon").setAttribute("points", "100,0 50,0 100,100");
    
});