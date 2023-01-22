function subsetForArray(arr) {
    let  newArr = [];
    let biggest = arr[0];
    for(let i = 0;i < arr.length;i++){
        let secondNum = arr[i];
       if( secondNum >= biggest){
        
        newArr.push(secondNum);
        biggest = secondNum;
       }
      
    }
    return newArr;
}
subsetForArray([1,3,8,4,10, 12, 3, 2, 24]);
console.log('---------------------------');
subsetForArray([1, 2, 3, 4]);
console.log('---------------------');
subsetForArray([20, 3, 2, 15,6, 1]);