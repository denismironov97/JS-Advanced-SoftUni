function circleArea(arg) {
    let typeOfVariable = typeof(arg);

    if(typeOfVariable !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfVariable}.`);
        return;
    }

    let radius = arg;
    const circleArea = +(Math.PI * Math.pow(radius, 2)).toFixed(2);

    console.log(circleArea);
}

circleArea(5);