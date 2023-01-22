function spiralMatrix(row,col) {
    let num = 1;
  let finalArr = [];
  for (let i= 0; i < row; i++) {
    let curArr = [];
    curArr.length = col;
    finalArr.push(curArr);
  }
    let startRowInex = 0;
    let startColIndex = 0;

    while(startRowInex < row && startColIndex < col){
        for(let i = startColIndex; i < col;++i){
            finalArr[startRowInex][i] = num++;
        }
        startRowInex++;
        for(let i = startRowInex; i < row; ++i){
            finalArr[i][col - 1] = num++;
        }
        col--;

        if(startRowInex < row){
            for (let i = col - 1; i >= startColIndex; --i) {
                finalArr[row - 1][i] = num++;
                
            }
            row--;
        }
        if(startColIndex < col){
            for(let i = row - 1; i >= startRowInex;--i){

                finalArr[i][startColIndex] = num++;
            }
            startColIndex++
        }
     

    }
    finalArr.forEach(row => console.log(row.join(' ')));
} 
        
spiralMatrix(5, 5);
console.log('------------------');
spiralMatrix(3, 3);