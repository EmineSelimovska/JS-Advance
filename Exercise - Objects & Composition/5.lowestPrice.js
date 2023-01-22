function lowestPrice(arr) {
    const lowest ={};

    for (let i = 0; i < arr.length;i++) {
        const elements = arr[i]
        let [nameTown,nameProduct,price] = elements.split(' | ');
        if(!lowest[nameProduct]){
            lowest[nameProduct] = {};
        }
        lowest[nameProduct][nameTown] = Number(price);
    }
    let finalResult = [];
    for (const key in lowest) {
       let sorted = Object.entries(lowest[key]).sort((a,b) => a[1] - b[1]);
       let [town,price] = sorted[0];
       finalResult.push(`${key} -> ${price} (${town})`);
    }
    return finalResult.join('\n')

    
}
console.log(lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2','Sample Town | Peach | 1',
'Sofia | Orange | 3','Sofia | Peach | 2',
'New York | Sample Product | 1000.1','New York | Burger | 10']));