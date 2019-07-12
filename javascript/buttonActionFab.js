window.addEventListener('load', () => {
    var $ = function(id){
        return document.getElementById(id);
    }
    // const canvas = new fabric.Canvas('draw-area');

    var selectButton = $('select'),
        clearEI = $('clear-button'),
        eraserButton = $('eraser'),
        drawButton = $('draw'),
        drawingColorEl = $('drawing-color');

    //canvas上の絵を全部消す
    clearEI.onclick = function(){canvas.clear()};

    selectButton.onclick = function(){
        canvas.isDrawingMode = false;
    };

    eraserButton.onclick =  function() {
        canvas.isDrawingMode = true;
        // context.lineCap = 'round' //丸みを帯びた線にする
        // context.lineJoin = 'round' //丸みを帯びた線にする
        // context.lineWidth = 5; //線の太さ
        // context.strokeStyle = "rgb(255,255,255)";
    };

    drawButton.onclick = function(){
        canvas.isDrawingMode = true;
        // 線の状態を定義する
        // MDN CanvasRenderingContext2D: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
        // context.lineCap = 'round' //丸みを帯びた線にする
        // context.lineJoin = 'round' //丸みを帯びた線にする
        // context.lineWidth = 2; //線の太さ
        // context.strokeStyle = "rgb(0,0,0)";
    };

    drawingColorEl.onchange = function () {
        canvas.freeDrawingBrush.color = this.value;
    }

});