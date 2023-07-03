function townPopulation(dataArr) {
    let assocArr = {};
    for (const currCityData of dataArr) {
        [city, population] = currCityData.split(' <-> ');
        population = Number(population);

        if(assocArr.hasOwnProperty(city)) {
            assocArr[city] = assocArr[city] + population;
        }
        else { 
            assocArr[city] = population;
        }
    }

    for (const property in assocArr) {
        console.log(`${property}: ${assocArr[property]}`);
    }
}

townPopulation(
    ['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);