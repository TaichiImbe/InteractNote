var objectselect = false;

$(document).ready(function(){
    var mousePos = {x:0, y:0}
    Canvas.observe({'mouse:down': function(e){
        mousePos = Canvas.getPointer(e.e);
        const posX = mousePos.x;
        const posY = mousePos.y;

        // const textfield = document.getElementById('text');
        // textfield.textContent = mousePos.x + "," + mousePos.y;
    }});

    Canvas.on('object:selected', function (e) {
        // logPrint(e.target.get);
        logPrint(e.target);
        objectselect = true;
        text = e.target;
        var obje = e.target;
        const ret = new fabric.Rect({
            left: obje.path[0][1],
            top: obje.path[0][2],
            fill: "rgb(0,0,255)",
            height: 5,
            width: 5

        });
        const end = new fabric.Rect({
            left: obje.path[obje.path.length-1][1],
            top: obje.path[obje.path.length-1][2],
            fill: "rgb(0,0,255)",
            height: 5,
            width: 5
        });
        Canvas.add(ret);
        Canvas.add(end);
    });

    Canvas.on('object:moving', function (e) {
        // logPrint(e.target.get);
        // logPrint('moving');
    });

    Canvas.on('selection:created', function (e) {
        // logPrint(e.target.get);
        // logPrint('created');
        objectselect = true;
    });

});