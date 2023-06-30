function diagonalSums(jaggedArr) {
    jaggedArrParser(jaggedArr);

    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    for (let row = 0; row < jaggedArr.length; row++) {
        primaryDiagonalSum += jaggedArr[row][row];
        secondaryDiagonalSum += jaggedArr[row][jaggedArr[row].length - 1 - row];
    }
    
    const diagonalSumsString = `${primaryDiagonalSum} ${secondaryDiagonalSum}`;
    console.log(diagonalSumsString);

    function jaggedArrParser(jaggedArrArg) {
        for (let i = 0; i < jaggedArrArg.length; i++) {
            let currRowString = jaggedArrArg[i];
            let parsedRow = currRowString.map(el => Number(el));
            jaggedArrArg[i] = parsedRow;
        }
    }
}

diagonalSums(
    [
        [3, 5, 17],
        [-1, 7, 14],
        [1, -8, 89]
    ]
);