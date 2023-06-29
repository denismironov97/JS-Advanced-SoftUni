function validityChecker(x1, y1, x2, y2) {
    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is ${isValidInt(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is ${isValidInt(x2, y2, 0, 0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValidInt(x1, y1, x2, y2)}`);

    function isValidInt(x1Arg, y1Arg, x2Arg, y2Arg,) {
        let distance = Math.sqrt((x2Arg - x1Arg)**2 + (y2Arg - y1Arg)**2);

        let message = null;
        if(Number.isInteger(distance)) {
            message = 'valid';
        }
        else {
            message = 'invalid';
        }
        
        return message;
    }
}