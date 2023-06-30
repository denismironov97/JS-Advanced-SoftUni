function pieceOfPie(pies, startIndexString, endIndexString) {
    let startIndex = pies.indexOf(startIndexString);
    let endIndex = pies.indexOf(endIndexString);
    const slicedPies = pies.slice(startIndex, ++endIndex);

    return (slicedPies);
}

console.log(
    pieceOfPie(
        ['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
        'Key Lime Pie',
        'Lemon Meringue Pie'
    )
);
