window.addEventListener('load', () => {
    var $ = function(id){
        return document.getElementById(id);
    }
    // const canvas = new fabric.Canvas('draw-area');

    var selectButton = $('select'),
        clearEI = $('clear-button'),
        eraserButton = $('eraser'),
        drawButton = $('draw'),
        // drawingColorEl = $('drawing-color');
        colorButton = $('colorButton');


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

    // drawingColorEl.onchange = function () {
    //     canvas.freeDrawingBrush.color = this.value;
    // }
    const picker = Pickr.create({
        el : '.pcr-button',
        theme: 'classic',

            swatches: [
            'rgba(244, 67, 54, 1)',
            'rgba(233, 30, 99, 0.95)',
            'rgba(156, 39, 176, 0.9)',
            'rgba(103, 58, 183, 0.85)',
            'rgba(63, 81, 181, 0.8)',
            'rgba(33, 150, 243, 0.75)',
            'rgba(3, 169, 244, 0.7)',
            'rgba(0, 188, 212, 0.7)',
            'rgba(0, 150, 136, 0.75)',
            'rgba(76, 175, 80, 0.8)',
            'rgba(139, 195, 74, 0.85)',
            'rgba(205, 220, 57, 0.9)',
            'rgba(255, 235, 59, 0.95)',
            'rgba(255, 193, 7, 1)'
        ],

        components: {

            // Main components
            preview: true,
            opacity: true,
            hue: true,

            // Input / output Options
            interaction: {
                hex: true,
                rgba: true,
                hsla: true,
                hsva: true,
                cmyk: true,
                input: true,
                clear: true,
                save: true
            }
        }
    });
        picker.on('save',(color, instance) => {
            console.log("pickron");
            canvas.freeDrawingBrush.color = this.value;
        });


});