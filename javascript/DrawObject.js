setInterval(function () {
    const object = Canvas.size();
    const objectArray = Canvas.getObjects();
    // console.log(object);
    objectArray.forEach(element => {
        // console.log(element);
        //console.log("Width:"+element.width +", Height:"+element.height);
    });
}, 10000)