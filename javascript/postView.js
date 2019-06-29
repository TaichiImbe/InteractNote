var canvas = document.getElementById("sq");

var str = "hoge \n hogehoge";
var textif = document.getElementById("text")
function draw() {
    var context = canvas.getContext('2d');
    context.fillStyle = "rgb(0,0,255)"; //線の色
    context.fillRect(100, 100, 100, 100)
    context.fillStyle = "rgb(0,0,0)"; //線の色
}

function Text() {
    context.fillText(textif.textContent, 100, 300);
}
$(function () {
    $('#textObj').ready("Text");
});

draw();