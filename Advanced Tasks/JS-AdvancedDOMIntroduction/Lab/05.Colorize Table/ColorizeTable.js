function colorize() {
    const tdElems = document.querySelectorAll('tbody tr');
    for (let i = 1; i < tdElems.length; i += 2) {
        const currTr = tdElems[i];
        currTr.style.backgroundColor = 'teal';
    }
}