function equalNeighbors(jaggedArr) {
    let equalPairsCount = 0;
    for (let row = 0; row < jaggedArr.length; row++) {
        for (let col = 0; col < jaggedArr[row].length; col++) {
            let currNum = jaggedArr[row][col];

            if(isWithinPositionBounds(jaggedArr, 'up', row, col)) {
                if(currNum === jaggedArr[row - 1][col]) {
                    equalPairsCount++;
                }
            }

            if(isWithinPositionBounds(jaggedArr, 'down', row, col)) {
                if(currNum === jaggedArr[row + 1][col]) {
                    equalPairsCount++;
                }
            }

            if(isWithinPositionBounds(jaggedArr, 'left', row, col)) {
                if(currNum === jaggedArr[row][col - 1]) {
                    equalPairsCount++;
                }
            }

            if(isWithinPositionBounds(jaggedArr, 'right', row, col)) {
                if(currNum === jaggedArr[row][col + 1]) {
                    equalPairsCount++;
                }
            }
        }
    }

    console.log(equalPairsCount);

    function isWithinPositionBounds(jaggedArr, position, rowIndex, colIndex) {
        switch (position) {
            case 'up':
                return rowIndex - 1 >= 0 && rowIndex - 1 < jaggedArr.length ? true : false;
            case 'down':
                return rowIndex + 1 >= 0 && rowIndex + 1 < jaggedArr.length ? true : false;
            case 'left':
                return colIndex - 1 >= 0 && colIndex - 1 < jaggedArr[rowIndex].length ? true : false;
            case 'right':
                return colIndex + 1 >= 0 && colIndex + 1 < jaggedArr[rowIndex].length ? true : false;
        }
    }
}

function solve(jaggArr) {
    let count = 0;

    for (let row = 0; row < jaggArr.length - 1; row++) {
        for (let col = 1; col < jaggArr[row].length; col++) {
        
            if (jaggArr[row][col] == jaggArr[row + 1][col]) {
                count++;
            }

            if (jaggArr[row][col] == jaggArr[row][col - 1]) {
                count++;
            }
        }
    }

    for (let i = 0; i < jaggArr[jaggArr.length - 1].length; i++) {
        if (jaggArr[jaggArr.length - 1][i] == jaggArr[jaggArr.length - 1][i + 1]) {
            count++;
        }
    }

    for (let i = 0; i < jaggArr.length - 1; i++) {
        if (jaggArr[i][0] == jaggArr[i + 1][0]) {
            count++;
        }
    }

    return count;
}

equalNeighbors([
        ['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']
    ]
);