function PrintEveryNthElementFromAnArray(arr, indexStepper) {
    let collResult = [];
    for (let i = 0; i < arr.length; i+= indexStepper) {
        collResult.push(arr[i]);
    }

    return collResult;
}