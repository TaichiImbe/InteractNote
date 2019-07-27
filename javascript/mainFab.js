
const canvas = new fabric.Canvas('draw-area',{
    isDrawingMode: true,
    selection: true,
    stateful: true
});
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