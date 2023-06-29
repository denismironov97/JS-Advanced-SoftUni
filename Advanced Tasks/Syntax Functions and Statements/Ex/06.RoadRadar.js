function roadRadar(speed, area) {
    speed = Number(speed);

    let isWithinSpeedLimit;
    let speedLimit;
    if(area === 'motorway') {
        speedLimit = 130;
        isWithinSpeedLimit = speed <= 130;
    }
    else if(area === 'interstate') {
        speedLimit = 90;
        isWithinSpeedLimit = speed <= 90;
    }
    else if(area === 'city') {
        speedLimit = 50;
        isWithinSpeedLimit = speed <= 50;
    }
    else {
        speedLimit = 20;
        isWithinSpeedLimit = speed <= 20;
    }

    let speedingStatus = null;
    if(speed - speedLimit <= 20) {
        speedingStatus = 'speeding';
    }
    else if(speed - speedLimit <= 40) {
        speedingStatus = 'excessive speeding';
    }
    else {
        speedingStatus = 'reckless driving';
    }

    let message = isWithinSpeedLimit ? `Driving ${speed} km/h in a ${speedLimit} zone` 
    : `The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${speedingStatus}`;

    console.log(message);
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');