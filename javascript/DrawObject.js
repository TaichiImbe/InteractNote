setInterval(function () {
    const object = Canvas.size();
    const objectArray = Canvas.getObjects();
    // logPrint(object);
    objectArray.forEach(element => {
        // logPrint(element);
        //logPrint("Width:"+element.width +", Height:"+element.height);
    });
}, 10000)