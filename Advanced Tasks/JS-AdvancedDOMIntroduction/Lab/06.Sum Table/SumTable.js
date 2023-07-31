function sumTable() {
    const productsPrice = Array.from(document.querySelectorAll('tr'));
    productsPrice.shift();
    let sum = 0;
    productsPrice.forEach(tr => {
        const price = Number(tr.lastElementChild.textContent); 
        sum += price;
    });

    document.getElementById('sum').textContent = sum.toFixed(2);
}