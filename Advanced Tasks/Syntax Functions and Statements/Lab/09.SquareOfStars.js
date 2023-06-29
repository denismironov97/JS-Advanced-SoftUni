function squareOfStars(rowsArg) {
    let rows;
    if(typeof(rowsArg) === 'undefined') {
        rows = 5;
    }
    else {
        rows = rowsArg;
    }
    
    let square = '';
    for (let row = 0; row < rows; row++) {
        let line = '';
        for (let col = 0; col < rows; col++) {
            line += '* ';
        }

        line.trimEnd();
        square += line + '\n';
    }

    return square;
}

console.log(
    squareOfStars()
);