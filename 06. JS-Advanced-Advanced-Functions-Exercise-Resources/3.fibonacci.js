function getFibonator() {
    let startNum = 1;
    let nextNum = 0;
    function fib() {
        let fibNumber = startNum + nextNum;// 1 + 0;
        startNum = nextNum;
        nextNum = fibNumber;
        return fibNumber;
        
    }

    return fib
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
