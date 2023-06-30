function smallestTwoNums(arr) {
    let ascendingSortFunc = function(num1, num2) {
        return num1 - num2;
    };

    let ascendingSort = arr.sort(ascendingSortFunc);
    let num1 = ascendingSort[0];
    let num2 = ascendingSort[0 + 1];

    const result = `${num1} ${num2}`;
    console.log(result);
}

//smallestTwoNums([30, 15, 5, 10, 65, 13]);
smallestTwoNums([3, 0, 10, 4, 7, 3]);
