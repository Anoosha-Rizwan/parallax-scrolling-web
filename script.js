let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let front = document.getElementById("front");
let text = document.getElementById("text");
let btn = document.getElementById("btn");


window.addEventListener("scroll", function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + "px";
    moon.style.top = value * 1.05 + "px";
    front.style.top = value * 0 + "px";
    btn.style.marginTop = value * 1.5 + "px";
    
    
})


