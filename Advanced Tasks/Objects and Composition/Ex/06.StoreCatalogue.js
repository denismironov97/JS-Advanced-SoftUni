function storeCatalogue(dataArr) {
  let products = new Map();
  for (const productPrice of dataArr) {
    let [product, price] = productPrice.split(" : ");
    price = Number(price);

    products.set(product, price);
  }

  let result = [];
  let alphabeticalSortedProducts = [...products.entries()].sort(); //(a, b) => a[0].localeCompare(b[0])
  let firstLetter = alphabeticalSortedProducts[0][0][0];
  result.push(firstLetter);
  for (const kvp of alphabeticalSortedProducts) {
    if (firstLetter !== kvp[0][0]) {
      firstLetter = kvp[0][0];
      result.push(firstLetter);
    }

    result.push(`${kvp[0]}: ${kvp[1]}`);
  }
  const stringResult = result.join("\n");
  console.log(stringResult);
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

storeCatalogue([
  "Banana : 2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);
