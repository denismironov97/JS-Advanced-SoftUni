function sortingNumbers(arrNums) {
    let ascendingOrder = arrNums.sort((a, b) => {
        return a - b;
    });

    let nums = [];
    const length = arrNums.length;
    for (let i = 0; i < length / 2; i++) {
        nums.push(ascendingOrder.shift());
        nums.push(ascendingOrder.pop());
    }

    return nums;
}

// sortingNumbers(
//     [1, 65, 3, 52, 48, 63, 31, -3, 18, 56]
// );

function sortingNumbersV1(arr) {
    let ascending = [...arr];
    ascending.sort((a, b) => a - b);
    let descending = [...arr];
    descending.sort((a, b) => b - a);

    let sorted = [];
    for (let i = 0; i < arr.length; i++) {
        let smallestNum = ascending.shift();
        let biggestNum = descending.shift();

        sorted.push(smallestNum);
        sorted.push(biggestNum);
    }

    let resultColl = sorted.slice(0, sorted.length / 2);

    return resultColl;
}

console.log(
    sortingNumbersV1(
        [1, 65, 3, 52, 48, 63, 31, -3, 18, 56]
    )
);
