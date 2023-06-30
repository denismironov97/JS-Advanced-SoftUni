function lastKNumbers(k, n) {
    let nums = [1];
    for (let i = 1; i < k; i++) {
        let sum = 0;
        if(nums.length <= n) {
            nums.forEach(num => sum += num);
        }
        else {
            for (let i = 0; i < n; i++) {
                const currNum = nums[nums.length - 1 - i];
                sum += currNum;
            }
        }

        nums.push(sum);
    }

    return nums;
}

console.log(
    lastKNumbers(6, 3)
);

console.log(
    lastKNumbers(8, 2)
);
