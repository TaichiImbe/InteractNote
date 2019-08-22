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