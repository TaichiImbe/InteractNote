var canvas = document.getElementById("draw-area");
var text = document.getElementById("text");

function onDown(e) {
    // console.log("down");
    text.textContent = ((e.clientX - canvas.offsetLeft)+','+(e.clientY - canvas.offsetTop));
}

function onUp(e) {
    // console.log("up");
    text.textContent = ((e.clientX - canvas.offsetLeft)+','+(e.clientY - canvas.offsetTop));
}

function onClick(e) {
    // console.log("click");
    text.textContent = ((e.clientX - canvas.offsetLeft)+','+(e.clientY - canvas.offsetTop));
}

function onOver(e) {
    // console.log("mouseover");
    text.textContent = ((e.clientX - canvas.offsetLeft)+','+(e.clientY - canvas.offsetTop));
}

function onOut() {
    // console.log("mouseout");
    // text.textContent = ((e.clientX - canvas.offsetLeft)+','+(e.clientY - canvas.offsetTop));
}

canvas.addEventListener('mousedown', onDown, false);
canvas.addEventListener('mouseup', onUp, false);
canvas.addEventListener('click', onclick, false);
canvas.addEventListener('mouseover', onOver, false);
canvas.addEventListener('mouseout', onOut, false);