function smallestTwoNums(arr) {
    //procedural ascending order sort()

    let temp;
    // traverse 0 to array length
    for (let i = 0; i < arr.length; i++) {
        // traverse i+1 to array length
        for (let j = i + 1; j < arr.length; j++) {
            // compare array element with all next element
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    const smallestNum1 = arr.shift();
    const smallestNum2 = arr.shift();
    console.log(smallestNum1 + ' ' + smallestNum2);
}

smallestTwoNums([30, 15, 5, 10, 65, 13]);
smallestTwoNums([3, 0, 10, 4, 7, 3]);

// traverse 0 to array length
/*
for (let i = 0; i < arr.Length - 1; i++) {
    // traverse i+1 to array length
    for (let j = i + 1; j < arr.Length; j++) {
        // compare array element with all next element
        if (arr[i] < arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
*/
 


    