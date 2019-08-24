
var canvas = new fabric.Canvas('draw-area',{
    isDrawingMode: true,
    selection: true,
    stateful: true
});

var annoCollection = new Map();
window.addEventListener('load',() =>{

    // const pd = canvas.getElementById('pdfCan');

    canvas.setWidth(window.innerWidth);
    canvas.setHeight(window.innerHeight);

    fabric.Object.prototype.transparentCorners = false;
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    canvas.freeDrawingBrush.color = 'rgb(0,0,0)';
    canvas.freeDrawingBrush.width = 5;
    canvas.freeDrawingBrush.shadowBlur = 0;
    canvas.hoverCursor = 'move';


});

this.canvas.on('object:added',function(e){
    let time = new Date();
    let y = time.getFullYear();
    let m = ("00"+ (time.getMonth()+1)).slice(-2);
    let d = ("00"+ time.getDate()).slice(-2);
    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();
    // console.log(time);
    let realTime = y+"/"+m+"/"+d+" "+hh+":"+mm+":"+ss
    // console.log(y+"/"+m+"/"+d+" "+hh+":"+mm+":"+ss);
    // console.log(e);
    annoCollection.set(realTime,e.target);
    console.log(annoCollection);
});