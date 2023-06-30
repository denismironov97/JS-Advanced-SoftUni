function negativePositiveNums(arrArg) {
    let resultArr = [];
    arrArg.forEach(num => {
        if(num >= 0) {
            resultArr.push(num);
        }
        else {
            resultArr.unshift(num);
        }
    });

    const resultString = resultArr.join('\n');
    console.log(resultString);
}

negativePositiveNums([7, -2, 8, 9]);