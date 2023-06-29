function fruit(fruitType, weightGrams, pricePerKg) {
    const weightKg = weightGrams / 1000;
    const totalPrice = weightKg * pricePerKg;
    const resultMessage = `I need $${totalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruitType}.`;

    console.log(resultMessage);
}

fruit('orange', 2500, 1.80);