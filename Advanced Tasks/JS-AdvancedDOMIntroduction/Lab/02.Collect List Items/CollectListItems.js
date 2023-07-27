function extractText() {
    const liElems = document.getElementById('items').children;
    const textArea = document.getElementById('result');
    
    let textBox = '';
    Array.from(liElems).forEach(el => {
        textBox += el.textContent + '\n';
    });
    
    textBox.trimEnd();
    textArea.textContent = textBox;
}