function lowestPricesInCities(dataArr) {
  let productTownPrice = new Map();
  dataArr.forEach((x) => {
    let [town, product, price] = x.split(" | ");
    price = Number(price);

    if (!productTownPrice.has(product)) {
      let townPrice = new Map();
      townPrice.set(town, price);
      productTownPrice.set(product, townPrice);
    }

    productTownPrice.get(product).set(town, price);
  });

  let result = [];
  for (const [product, townPrice] of productTownPrice) {
    let lowestPrices = [...townPrice.entries()].sort(
      (kvpA, kvpB) => kvpA[1] - kvpB[1]
    );
    result.push(`${product} -> ${lowestPrices[0][1]} (${lowestPrices[0][0]})`);
  }

  const stringResult = result.join("\n");
  console.log(stringResult);
}

lowestPricesInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);

function solve(input) {
  let products = new Map();
  input.forEach((row) => {
    let [town, product, priceText] = row.split(" | ");
    let price = Number(priceText);

    if (!products.get(product)) {
      products.set(product, new Map());
    }
    products.get(product).set(town, price);
  });

  let result = [];

  for (const productWithPrice of products) {
    // let lowestPrice = [...productWithPrice[1]].sort((a, b) => a[1] - b[1])[0];
    const towns = [...productWithPrice[1]]; // spread into new area
    let lowestPrice = towns.sort((a, b) => a[1] - b[1])[0];
    // .sort((a, b) => a[1] - b[1])[0] => [0] will take the town at the first position after sorting for lowest price
    result.push(
      `${productWithPrice[0]} -> ${lowestPrice[1]} (${lowestPrice[0]})`
    );
  }

  console.log(result.join("\n"));
}
