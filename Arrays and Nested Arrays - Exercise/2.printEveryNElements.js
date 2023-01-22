function printEveryNElements(arr,number) {
    let elements = [];
    for(let i = 0; i < arr.length; i += number){
       elements.push(arr[i]);
    }

    
    return elements;
    
}
console.log(printEveryNElements(['5','20','31','4','20'],2));
console.log('---------------------------');
console.log(printEveryNElements(['dsa', 'asd', 'test', 'tset'], 2));
console.log('-------------------------');
console.log(printEveryNElements(['1', '2', '3', '4', '5'], 6));