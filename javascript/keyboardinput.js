document.onkeydown = function (e) {
    if (e.keyCode == 8 && objectselect) {
        var activeObject = Canvas.getActiveObject();
        activeGroup = Canvas.getActiveObjects();

        logPrint(activeObject);
        logPrint(activeGroup);
        if (activeGroup) {
            logPrint("Group");
            // var objectInGroup = activeGroup.getObjects();
            Canvas.discardActiveObject();
            activeGroup.forEach(function (object) {
                Canvas.remove(object);
            });

        } else if (activeObject) {
            logPrint("Object");
            var group = activeObject.getObjects();
            group.forEach(function (object) {
                Canvas.remove(object)
            })
            // Canvas.remove(activeObject);
        }
    }


}