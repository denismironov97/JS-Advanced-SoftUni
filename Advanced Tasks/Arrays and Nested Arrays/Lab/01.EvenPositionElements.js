function evenPositionElement(arrArg) {
    let nums = arrArg.map(Number);
    
    let evenPosNums = [];
    for (let i = 0; i < nums.length; i++) {
        if(i % 2 === 0) {
            evenPosNums.push(nums[i]);
        }
    }

    const evenNumsString = evenPosNums.join(' ');
    console.log(evenNumsString);
}