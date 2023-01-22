function rotateArray(arr,num) {

    for (let i = 0; i < num; i++) {
        for(let j = 0; j <= arr.length; j++){
           
            let current = arr.pop();
            arr.unshift(current)
        }
        
        
    }
      console.log(arr.join(' '));
    
}
rotateArray(['1','2','3','4'],2 );
console.log('--------------------');
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);