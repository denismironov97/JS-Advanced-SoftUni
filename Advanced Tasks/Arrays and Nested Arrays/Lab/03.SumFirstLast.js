function sumFirstLast(stringArr) {
    let nums = stringArr.map(Number);
    let firstEl = nums.shift();
    let lastEl = nums.pop();
    const sum = firstEl + lastEl;

    console.log(sum);
}

sumFirstLast(['20', '30', '40']);