function extract(idElementArg) {
    const tagEl = document.getElementById(idElementArg);
    let text = tagEl.textContent;

    const regEx = /\((.+?)\)/gm;
    let matchesArr = text.match(regEx);
    let textsColl = [];

    if(regEx.test(text)) {
        for (let i = 0; i < matchesArr.length; i++) {
            let currMatchOnlyWord = matchesArr[i].substring(1, matchesArr[i].length - 1);
            textsColl.push(currMatchOnlyWord);
        }
    }
    
    let result = textsColl.join('; ');
    return result;
}