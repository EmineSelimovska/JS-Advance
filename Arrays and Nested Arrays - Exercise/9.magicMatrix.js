function magicMatrix(matrix) {
    let sumRow = 0;
    let sumCol = 0;

    for(let row = 0; row < matrix.length; row++){
        let arr = matrix[row].join('');
       for(let col = 0; col < arr.length;col++){
        sumRow += Number(arr[col]);
        sumCol += Number(arr[0]);
       
      }

    }
    if(sumRow === sumCol){
        console.log('true');
    }else{
        console.log('false');
    }
    
}
magicMatrix([[4, 5, 6],
             [6, 5, 4],
             [5, 5, 5]]);
console.log('-----------------');
magicMatrix([[11, 32, 45], 
             [21, 0, 1], 
             [21, 1, 1]]);
console.log('--------------------');
magicMatrix([[1, 0, 0], 
             [0, 0, 1], 
             [0, 1, 0]]);
