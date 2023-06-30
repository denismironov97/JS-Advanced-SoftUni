function magicMatrices(jaggArr) {
    let areMatricesMagical = true;
    for (let row = 0; row < jaggArr.length - 1; row++) {
        let currRowSum = 0;
        jaggArr[row].forEach(n => currRowSum += n);

        let nextRowSum = 0;
        jaggArr[row + 1].forEach(n => nextRowSum += n);

        if(currRowSum !== nextRowSum) {
            areMatricesMagical = false;
            break;
        }
    }

    if(!areMatricesMagical) {
        console.log(areMatricesMagical);
        return;
    }

    let colSums = [];
    for (let col = 0; col < jaggArr.length - 1; col++) {
        let currColSum = 0;
        for (let row = 0; row < jaggArr.length; row++) {
            currColSum += jaggArr[row][col];
        }

        colSums.push(currColSum);
    }

    for (let i = 1; i < colSums.length; i++) {
        const prevColSum = colSums[i - 1];
        const currColSum = colSums[i];

        if(prevColSum !== currColSum) {
            areMatricesMagical = false;
            break;
        }
        
    }

    console.log(areMatricesMagical);
}

magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);

magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);

magicMatrices(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);

function magicMatricesV1(matrix) {
    let isMatrixMagical = true;
    let breakFlag = false;

    for (let col = 0; col < matrix.length; col++) {
        let currColSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            currColSum += matrix[row][col];
        }

        for (const currRow of matrix) {
            let currRowSum = 0;
            currRow.forEach(x => currRowSum += x);

            if(currRowSum !== currColSum) {
                isMatrixMagical = false;
                breakFlag = true;
                break;
            }
        }

        if(breakFlag) {
            break;
        }
    }

    console.log(isMatrixMagical);
}