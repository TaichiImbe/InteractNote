document.onkeydown = function (e) {
    if (e.keyCode == 8 && objectselect) {
        var activeObject = Canvas.getActiveObject();
        activeGroup = Canvas.getActiveObjects();

        console.log(activeObject);
        console.log(activeGroup);
        if (activeGroup) {
            console.log("Group");
            // var objectInGroup = activeGroup.getObjects();
            Canvas.discardActiveObject();
            activeGroup.forEach(function (object) {
                Canvas.remove(object);
            });

        } else if (activeObject) {
            console.log("Object");
            var group = activeObject.getObjects();
            group.forEach(function (object) {
                Canvas.remove(object)
            })
            // Canvas.remove(activeObject);
        }
    }


}