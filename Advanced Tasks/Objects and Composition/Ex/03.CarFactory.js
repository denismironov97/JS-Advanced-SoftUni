function carFactory(carDataObj) {
    const {model, power, color, carriage, wheelsize} = carDataObj;

    const car = {
        model: model,
        engine: createEngine(power),
        carriage: createCarriage(carriage, color),
        wheels: createWheels(wheelsize)
    };

    console.log(car);
    
    function createEngine(powerArg) {
        const engines = {
            smallEngine: { power: 90, volume: 1800 },
            normalEngine: { power: 120, volume: 2400 },
            monsterEngine: { power: 200, volume: 3500 }
        }

        let engine;
        if(powerArg <= 90) {
            engine = engines['smallEngine'];
        } 
        else if(powerArg <= 120) {
            engine = engines['normalEngine'];
        }
        else {
            engine = engines['monsterEngine'];
        }

        return engine;
    }

    function createCarriage(carriageType, colorArg) {
        let carriage = carriageType === 'hatchback' ? { type: 'hatchback', color: colorArg} : { type: 'coupe', color: colorArg};
        return carriage;
    }

    function createWheels(wheelsizeArg) {
        let wheelsize = Math.floor(wheelsizeArg);
        if(wheelsize % 2 === 0) {
            wheelsize--;
        }

        return [wheelsize, wheelsize, wheelsize, wheelsize];
    }   
}

carFactory(
    { 
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17 
    }
)