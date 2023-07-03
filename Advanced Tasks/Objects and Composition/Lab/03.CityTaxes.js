function cityTaxes(name, population, treasury) {
  const city = createCity(name, population, treasury);

  return city;

  function createCity(name, population, treasury) {
    const city = {
      name,
      population,
      treasury,
      taxRate: 10,
      collectTaxes() {
        this.treasury += this.population * this.taxRate;
      },
      applyGrowth(percentage) {
        let truePercentage = percentage / 100;
        this.population = this.population * (1 + truePercentage);
      },
      applyRecession: function (percentage) {
        let truePercentage = percentage / 100;
        this.population = this.population * (1 - truePercentage);
      },
    };

    return city;
  }
}

let city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(5);
console.log(city.population);
