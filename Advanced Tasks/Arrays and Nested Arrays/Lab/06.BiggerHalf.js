function biggerHalf(arrArg) {
    let specificSortedArr = specificSort(arrArg.sort((a, b) => a - b));

    return specificSortedArr

    function specificSort(arrArg) {
        const length = arrArg.length;
        //let index = length / 2;

        let index = Math.trunc(length / 2);

        return arrArg.slice(index);
    }
}

console.log(
    biggerHalf([4, 7, 2, 5])
);

console.log(
    biggerHalf([3, 19, 14, 7, 2, 19, 6])
);