function processOddPos(arrArg) {
    let oddPosColl = [];
    for (let i = 0; i < arrArg.length; i++) {
        if(i % 2 !== 0) {
            oddPosColl.push(arrArg[i]);
        }
    }

    let specificSortedArr = oddPosColl.map(x => x * 2).reverse();
    const resultString = specificSortedArr.join(' ');

    return resultString;
}

console.log(
    processOddPos([3, 0, 10, 4, 7, 3])
);