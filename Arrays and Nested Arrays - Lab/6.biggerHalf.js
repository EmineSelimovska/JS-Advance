function biggerHalf(arr) {
    arr.sort((a,b) => a - b);
    const start = Math.floor(arr.length / 2);
    const result = arr.slice(start);
    
    return result;
}
console.log(biggerHalf([4, 7, 2, 5]));
biggerHalf([3, 19, 14, 7, 2, 19, 6]);