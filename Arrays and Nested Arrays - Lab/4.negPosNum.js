function negPosNum(arr) {
    const newArr = [];

    for (const num of arr) {
        if(num < 0){
            newArr.unshift(num);

        }else{
            newArr.push(num)
        }
        
    }
    console.log(newArr.join('\n'));
}
negPosNum([7, -2, 8, 9]);
console.log('--------------');
negPosNum([3, -2, 0, -1]);