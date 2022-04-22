
let element = document.getElementById('buton');
element.addEventListener('click', funcOne);

let ground = document.getElementById('main');

ground.style.backgroundColor = "lightgrey";
ground.style.color = "black";

function funcOne(e) {
    e.preventDefault();
    if (ground.style.backgroundColor == "lightgrey") {
    document.body.style.backgroundColor = "gray";
    document.body.style.color = "white";
    ground.style.backgroundColor = "#0b0a14";
    ground.style.color = "white";
    } else {
    ground.style.backgroundColor = "lightgrey";
    ground.style.color = "black";
    }
};
