function showText() {
    /*
    const aTagEl = document.querySelector('a');
    const spanEl = document.getElementById('text');
    spanEl.style.display = 'inline';
    aTagEl.style.display = 'none';
    */

    /*
    const aTagEl = document.querySelector('a');
    const spanEl = document.getElementById('text');

    spanEl.style.display = 'inline';
    aTagEl.textContent = null;
    */
    
    const aTagEl = document.querySelector('a');
    const spanEl = document.getElementById('text');
    aTagEl.parentElement.removeChild(aTagEl);
    spanEl.style.display = 'inline';
}