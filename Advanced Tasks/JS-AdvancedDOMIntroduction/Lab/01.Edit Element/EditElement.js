function editElement(refToElement, matcher, replacer) {
    const text = refToElement.textContent;
    const regEx = new RegExp(matcher, 'g');
    //const newText = text.split(match).join(replace);
    const newText = text.replace(regEx, replacer);
    refToElement.textContent = newText;
}