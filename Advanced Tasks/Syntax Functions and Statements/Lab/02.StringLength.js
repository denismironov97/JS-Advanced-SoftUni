function stringLenght(stringArg1, stringArg2, stringArg3) {
    const totalLength = stringArg1.length + stringArg2.length + stringArg3.length;
    const averageLenght = Math.floor(totalLength / 3);
    console.log(totalLength);
    console.log(averageLenght);
}

stringLenght('chocolate', 'ice cream', 'cake');