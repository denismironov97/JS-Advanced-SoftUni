function timeToWalk(steps, footPrint, speed) {
    let distanceInM = steps * footPrint;
    let numBreaks = Math.trunc(distanceInM / 500);
    let timeForBreaksInH = numBreaks / 60;
    let timeTInH = distanceInM / 1000 / speed;

    let totalTimeInH = timeTInH + timeForBreaksInH;
    let hoursTrue = Math.trunc(totalTimeInH);
    
    let minutes = totalTimeInH * 60;
    let minutesTrue = Math.trunc(minutes);

    //!
    let seconds =  Math.round((minutes - minutesTrue) * 60);

    console.log((hoursTrue < 10 ? "0" : "") + hoursTrue + ":" + (minutesTrue < 10 ? "0" : "") + (minutesTrue) + ":" + (seconds < 10 ? "0" : "") + seconds);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);