var position = document.getElementById("pdfCan");
var text = document.getElementById("text");

function onDown(e) {
    // logPrint("down");
    text.textContent = ((e.clientX - position.offsetLeft)+','+(e.clientY - position.offsetTop));
}

function onUp(e) {
    // logPrint("up");
    text.textContent = ((e.clientX - position.offsetLeft)+','+(e.clientY - position.offsetTop));
}

function onClick(e) {
    // logPrint("click");
    text.textContent = ((e.clientX - position.offsetLeft)+','+(e.clientY - position.offsetTop));
}

function onOver(e) {
    // logPrint("mouseover");
    text.textContent = ((e.clientX - position.offsetLeft)+','+(e.clientY - position.offsetTop));
}

function onOut() {
    // logPrint("mouseout");
    // text.textContent = ((e.clientX - position.offsetLeft)+','+(e.clientY - position.offsetTop));
}

position.addEventListener('mousedown', onDown, false);
position.addEventListener('mouseup', onUp, false);
position.addEventListener('click', onclick, false);
position.addEventListener('mouseover', onOver, false);
position.addEventListener('mouseout', onOut, false);