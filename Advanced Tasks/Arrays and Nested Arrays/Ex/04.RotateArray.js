function rotateArr(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop());
    }
    
    const resultString = arr.join(' ');
    console.log(resultString);
}

rotateArr(
    [
        '1', 
        '2', 
        '3', 
        '4'
    ], 
    2
);

rotateArr(
    ['Banana', 
    'Orange', 
    'Coconut', 
    'Apple'], 
    15
);