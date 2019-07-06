var position = document.getElementById("draw-area");
var text = document.getElementById("text");

function onDown(e) {
    // console.log("down");
    text.textContent = ((e.clientX - position.offsetLeft)+','+(e.clientY - position.offsetTop));
}

function onUp(e) {
    // console.log("up");
    text.textContent = ((e.clientX - position.offsetLeft)+','+(e.clientY - position.offsetTop));
}

function onClick(e) {
    // console.log("click");
    text.textContent = ((e.clientX - position.offsetLeft)+','+(e.clientY - position.offsetTop));
}

function onOver(e) {
    // console.log("mouseover");
    text.textContent = ((e.clientX - position.offsetLeft)+','+(e.clientY - position.offsetTop));
}

function onOut() {
    // console.log("mouseout");
    // text.textContent = ((e.clientX - position.offsetLeft)+','+(e.clientY - position.offsetTop));
}

position.addEventListener('mousedown', onDown, false);
position.addEventListener('mouseup', onUp, false);
position.addEventListener('click', onclick, false);
position.addEventListener('mouseover', onOver, false);
position.addEventListener('mouseout', onOut, false);