function listOfNames(names) {
    let sortedNames = names.sort();//ascending alphabetical sort
    const resultString = sortedNames.join('\n');
    console.log(resultString)
}

listOfNames(
    ["John", "Bob", "Christina", "Ema"]
);