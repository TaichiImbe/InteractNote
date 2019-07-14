// クリアボタンイベント 
window.addEventListener('load', () => {
    const canvas = document.querySelector('#draw-area');
    const context = canvas.getContext("2d");


    //canvas上の絵を全部消す
    function clear() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function eraser() {
        context.globalCompositeOperation = 'destination-out';
        // context.lineCap = 'round' //丸みを帯びた線にする
        // context.lineJoin = 'round' //丸みを帯びた線にする
        // context.lineWidth = 5; //線の太さ
        // context.strokeStyle = "rgb(255,255,255)";
    }

    function drawset() {
        // 線の状態を定義する
        // MDN CanvasRenderingContext2D: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
        context.lineCap = 'round' //丸みを帯びた線にする
        context.lineJoin = 'round' //丸みを帯びた線にする
        context.lineWidth = 2; //線の太さ
        context.strokeStyle = "rgb(0,0,0)";
    }

    function Set() {

        const clearButton = document.querySelector('#clear-button');
        clearButton.addEventListener('click',clear);

        const eraserButton = document.querySelector('#eraser');
        eraserButton.addEventListener('click', eraser);

        const drawButton = document.querySelector('#draw');
        drawButton.addEventListener('click', drawset);
    }

    Set();

});