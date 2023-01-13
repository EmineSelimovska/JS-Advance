function diagonalSum(matrix) {
    let main = 0;
    let secondMain = 0;
    let result = [];

    for(let i = 0;i < matrix.length;i++){
        main += matrix[i][i];
        }
   
    let rev = matrix.reverse()
    for(let j = 0; j< rev.length;j++){
        secondMain += rev[j][j];
        

    }
    result.push(main,secondMain);
   console.log(result.join(' '));
}
diagonalSum([[20, 40],
             [10, 60]]);
console.log('-----------------------');
diagonalSum([[3, 5, 17],
            [-1, 7, 14], 
            [1, -8, 89]]);