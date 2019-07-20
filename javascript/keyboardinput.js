document.onkeydown = function (e) {
    if (e.keyCode == 8 && objectselect) {
        var activeObject = canvas.getActiveObject();
        activeGroup = canvas.getActiveObjects();

        console.log(activeObject);
        console.log(activeGroup);
        if (activeGroup) {
            console.log("Group");
            // var objectInGroup = activeGroup.getObjects();
            canvas.discardActiveObject();
            activeGroup.forEach(function (object) {
                canvas.remove(object);
            });

        } else if (activeObject) {
            console.log("Object");
            var group = activeObject.getObjects();
            group.forEach(function (object) {
                canvas.remove(object)
            })
            // canvas.remove(activeObject);
        }
    }


}