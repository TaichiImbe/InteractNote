window.addEventListener('load',() => {
    const back = new fabric.Canvas('sq');

    const rect = new fabric.Rect({
        left: 100,
        top : 100,
        fill: "rgb(0,0,255)",
        width: 100,
        height: 100,
    });

    back.add(rect);

});