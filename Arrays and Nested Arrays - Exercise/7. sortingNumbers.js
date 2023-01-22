function sortingNumbers(arr) {
  
    let result = [];
    let newArr = arr.sort((a, b) => a - b);
    while(newArr.length !== 0){
      
      result.push(newArr[0]) && newArr.shift();
      result.push(newArr[newArr.length-1]) && newArr.pop();
    }
        return result;
 }
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
