function aggElems(arr) {
    const sum = getArrSum(arr);
    const invertedSum = getInvertedSum(arr);
    const concatArr = getConcatArr(arr);

    console.log(sum);
    console.log(invertedSum);
    console.log(concatArr);

    function getArrSum(arr) {
        let arrCopy = [...arr];
        const sum = arrCopy.reduce((a, b) => a + b , 0);

        return sum;
    }

    function getInvertedSum(arr) {
        let arrCopy = [...arr];

        let sum = 0;
        arrCopy.forEach(num => {
            sum += (1 / num);
        });

        return sum;
    }

    function getConcatArr(arr) {
        let arrCopy = [...arr];
        const concatedArr = arrCopy.join('');

        return concatedArr;
    }
}

aggElems([2, 4, 8, 16]);