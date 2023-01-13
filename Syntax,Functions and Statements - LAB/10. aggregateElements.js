function aggregateElements(arr) {
    let sum = 0;
    let inverseSum = 0;
    
    for (let index = 0; index < arr.length; index++) {
       let num = Number(arr[index]);
       
       sum += num;
       inverseSum += 1/num;
      
       
        
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(arr.join(''));
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16])