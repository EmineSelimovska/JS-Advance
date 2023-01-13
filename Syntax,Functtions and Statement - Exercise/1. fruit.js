function fruit(type,weight,price) {
    let gr = weight / 1000 ;
    let priceForType = gr * price;
    console.log(`I need $${priceForType.toFixed(2)} to buy ${gr.toFixed(2)} kilograms ${type}.`);

    
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35)