function carFactory({model,power,color,carriage,wheelsize}) {
    const eng = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400},
        monster: { power: 200, volume: 3500 },

    }
    let engine = {};
    if(power <= 90){
        engine = eng.small;
    }else if(power <= 120){
        engine = eng.normal;
    }else{
        engine = eng.monster;
    }
    let sizeOfWheels = wheelsize;
    if(wheelsize % 2 === 0){
        sizeOfWheels--
    }
    const car = {
        model,
        engine,
        carriage: {
            type: carriage,
            color,
        },
        wheels:[sizeOfWheels,sizeOfWheels,sizeOfWheels,sizeOfWheels]


    }
    return car;
}
console.table(carFactory({ model: 'VW Golf II',power: 90,color: 'blue',
carriage: 'hatchback',wheelsize: 14 }));