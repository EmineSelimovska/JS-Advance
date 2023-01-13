function smallest(arr) {
    
    arr.sort((a,b) => a - b);
    let result = arr.slice(0,2);
    
   return result.join(' ');
}
smallest([30, 15, 50, 5]);
console.log('--------------');
smallest([3, 0, 10, 4, 7, 3]);