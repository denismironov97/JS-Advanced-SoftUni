function biggestEl(jaggedArr) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    for (const currRow of jaggedArr) {
        for (const currColnum of currRow) {
            if(currColnum > maxNum) {
                maxNum = currColnum;
            }
        }
    }

    return maxNum;
}
/*
console.log(
    biggestEl(
        [
            [3, 5, 7, 12],
            [-1, 4, 33, 2],
            [8, 3, 0, 4]
        ]
    )
);
*/
function biggestElV1(jaggedArr) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    for (const currRow of jaggedArr) {
        let tempMaxNum = Math.max(...currRow);
        if(tempMaxNum > maxNum) {
            maxNum = tempMaxNum;
        }
    }

    return maxNum;
}

console.log(
    biggestElV1([
            [3, 5, 7, 12],
            [-1, 4, 33, 2],
            [8, 3, 0, 4]
        ]
    )
);

