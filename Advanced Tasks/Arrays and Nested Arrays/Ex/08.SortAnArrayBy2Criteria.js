function sortArrayBySecondCriteria(stringArr) {
    stringArr.sort((a, b) => {
        if(a.length == b.length) {
            return a.localeCompare(b);
        }

        return a.length - b.length;
    });

    const resultString = stringArr.join('\n');
    console.log(resultString);
}

sortArrayBySecondCriteria(
    ['alpha', 
    'beta', 
    'gamma']
);

sortArrayBySecondCriteria(
    ['Isacc', 
    'Theodor', 
    'Jack', 
    'Harrison', 
    'George']
);

sortArrayBySecondCriteria(
    ['test', 
    'Deny', 
    'omen', 
    'Default']
);