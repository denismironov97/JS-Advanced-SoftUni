function sameNums(numArg) {
    let numsArr = numArg.toString().split('').map(x => Number(x));
    let digitSum = 0;
    let unlocked = true;
    let areAllNumsEqual = true;
    for (let i = 1; i < numsArr.length; i++) {
        const prevNum = numsArr[i - 1];
        const num = numsArr[i];

        if(prevNum !== num && unlocked) {
            areAllNumsEqual = false;
            unlocked = false;
        }

        digitSum += num;
    }

    digitSum += numsArr[0];

    console.log(areAllNumsEqual);
    console.log(digitSum);
}

function sameNumsV1(numArg) {
    let numsArr = numArg.toString().split('').map(x => Number(x));
    const k = numsArr[0];
    let areAllNumsEqual = numsArr.every(x => x === k);
    let digitSum = numsArr.reduce((num1, num2) => num1 + num2, 0);

    console.log(areAllNumsEqual);
    console.log(digitSum);
}

sameNumsV1(1311211131);
sameNumsV1(666666);