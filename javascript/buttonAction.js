// クリアボタンイベント 
window.addEventListener('load', () => {
    const canvas = document.querySelector('#draw-area');
    const context = canvas.getContext("2d");


    //canvas上の絵を全部消す
    function clear() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function Set() {

        const clearButton = document.querySelector('#clear-button');
        clearButton.addEventListener('click',clear);
    }

    Set();

});