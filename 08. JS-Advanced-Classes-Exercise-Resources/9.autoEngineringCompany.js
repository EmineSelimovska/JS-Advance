function carCompany(input) {
    let productedCars = new Map;

    for (const line of input) {
        let [brand,model,produced] = line.split(' | ');
        produced = Number(produced);
       
        if(!productedCars.has(brand)){
           
            productedCars.set(brand,{});
        }
       
        if(!productedCars.get(brand).hasOwnProperty(model)){
            productedCars.get(brand)[model] = produced;
        }else{
            productedCars.get(brand)[model] += produced;
        }
    }
   
    for (const brand of productedCars) {
        console.log(brand[0]);
        let models = brand[1];
        for (const model of Object.keys(models)) {
            console.log(`###${model} -> ${models[model]}`);
            
        }
     
    }
    
}
carCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])