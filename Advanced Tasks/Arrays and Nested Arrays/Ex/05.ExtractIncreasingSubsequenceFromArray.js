function getIncreasingSubsequenceFromArray(arr) {
    let subsequence = [];
    let maxNum = Number.MIN_VALUE;
    for (const currNum of arr) {
        if(currNum > maxNum) {
            subsequence.push(currNum);
            maxNum = currNum;
        }
    }

    return subsequence;
}

getIncreasingSubsequenceFromArray(
    [
        1, 
        3, 
        8, 
        4, 
        10, 
        12, 
        3, 
        2, 
        24
    ]
);

function extractIncreasingSubsetOfSequenceV3(array) {
    let result = array.reduce((arr, current) => {
        if (arr.length) {
            if (current >= arr[arr.length - 1]) {
                arr.push(current);
            }
        } else {
            arr.push(current);
        }

        return arr;
    }, []);
    
    return result;
}