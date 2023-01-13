function lastKNumber(n,k) {
    let arr = [1];

    for(let i = 1; i< n;i++){
        let lastK = arr.slice(-k);
       let sum = 0;

       for (const number of lastK) {
        sum += Number(number);
        
       }
       arr.push(sum);
    }

    return arr;
}
console.log(lastKNumber(6, 3));
lastKNumber(8, 2);