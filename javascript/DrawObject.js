setInterval(function () {
    const object = canvas.size();
    const objectArray = canvas.getObjects();
    // console.log(object);
    objectArray.forEach(element => {
        // console.log(element);
        console.log("Width:"+element.width +", Height:"+element.height);
    });
}, 10000)