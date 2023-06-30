function addRemoveElems(commands) {
    let coll = [];
    for (let i = 0; i < commands.length; i++) {
        let instruction = commands[i];
        let num = i + 1;
        if(instruction === 'add') {
            coll.push(num);
        }
        else {
            coll.pop(num);
        }
    }

    let stringBuilder = '';
    coll.forEach(el => {
        stringBuilder += el + '\n';
    });

    const resultString = coll.length > 0 ? stringBuilder.trimEnd() : 'Empty';
    console.log(resultString);
}

addRemoveElems([
    'add', 
    'add', 
    'add', 
    'add'
]);

addRemoveElems([
    'add', 
    'add', 
    'remove', 
    'add', 
    'add'
]);

addRemoveElems([
    'remove', 
    'remove', 
    'remove'
]);