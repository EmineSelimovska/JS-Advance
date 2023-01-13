function processOdd(arr) {
    let result = [];
    for(let i = 0;i < arr.length;i++){
        let num = arr[i];
        if(i % 2 !== 0){
            num *= 2;
            result.push(num);


        }
    }
     result.reverse();
     return result.join(' ');

    
}
console.log(processOdd([10, 15, 20, 25]));
console.log(processOdd([3, 0, 10, 4, 7, 3]));