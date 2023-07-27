function calc() {
    // TODO: sum = num1 + num2

    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;
    const sum = num1 + num2;
    document.getElementById('sum').value = sum;
}
