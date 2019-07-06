var backcanvas = document.getElementById("sq");
// var canvas = new fabric.Canvas("sq");

var str = "hoge \n hogehoge";
// var textif = new fabric.text("text")
// var rect = new fabric.Rect({
//     left: 100,
//     top : 100,
//     fill: "rgb(0,0,255)",
//     width: 100,
//     height: 100,
// });
function draw() {
    var context = backcanvas.getContext('2d');
    context.fillStyle = "rgb(0,0,255)"; //線の色
    context.fillRect(100, 100, 100, 100)
    context.fillStyle = "rgb(0,0,0)"; //線の色
}

// function Text() {
//     context.fillText(textif.textContent, 100, 300);
// }
// $(function () {
//     $('#textObj').ready("Text");
// });

draw();
// canvas.add(rect);