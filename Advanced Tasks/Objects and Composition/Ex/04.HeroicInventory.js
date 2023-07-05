function heroicInventory(dataArr) {
    let inventory = [];
    for (const currHeroData of dataArr) {
        [hero, level, items] = currHeroData.split(' / ');

        if(typeof items === 'undefined') {
            items = [];
        }
        else {
            items = items.split(', ');
        }

        let tempObjChar = {
            name: hero,
            level: Number(level),
            items: items
        }

        inventory.push(tempObjChar)
    }

    let stringResult = JSON.stringify(inventory);
    console.log(stringResult);
}

heroicInventory(
    ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);