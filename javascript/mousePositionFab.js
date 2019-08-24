var objectselect = false;

$(document).ready(function(){
    var mousePos = {x:0, y:0}
    canvas.observe({'mouse:down': function(e){
        mousePos = canvas.getPointer(e.e);
        const posX = mousePos.x;
        const posY = mousePos.y;

        // const textfield = document.getElementById('text');
        // textfield.textContent = mousePos.x + "," + mousePos.y;
    }});

    canvas.on('object:selected', function (e) {
        // console.log(e.target.get);
        console.log(e.target);
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
        canvas.add(ret);
        canvas.add(end);
    });

    canvas.on('object:moving', function (e) {
        // console.log(e.target.get);
        // console.log('moving');
    });

    canvas.on('selection:created', function (e) {
        // console.log(e.target.get);
        // console.log('created');
        objectselect = true;
    });

});