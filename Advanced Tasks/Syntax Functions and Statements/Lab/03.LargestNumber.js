function largestNum(num1, num2, num3) {
    let maxNum;

    // if(num1 > num2 && num1 > num3) {
    //     maxNum = num1;
    // }
    // else if(num2 > num1 && num2 > num3) {
    //     maxNum = num2;
    // }
    // else {
    //     maxNum = num3;
    // }

    if(num1 > num2) {
        maxNum = num1;
    }
    else {
        maxNum = num2;
    }

    if(maxNum < num3) {
        maxNum = num3;
    }

    console.log(`The largest number is ${maxNum}.`);
}

largestNum(5, -3, 16);
largestNum(-3, -5, -22.5);