function getGreatestCommonDivisor(num1, num2) {
    let smallerNum = Math.min(num1, num2);
    let biggerNum = Math.max(num1, num2);
    let greatestCommonDivisor = 0;
    for (let i = 1; i <= smallerNum; i++) {
        if(smallerNum % i === 0 && biggerNum % i === 0) {
            greatestCommonDivisor = i;
        }        
    }

    console.log(greatestCommonDivisor);
}

getGreatestCommonDivisor(2154, 458);