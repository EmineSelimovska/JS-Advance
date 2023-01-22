function diagonalAttacks(input) {
  let arr = input.map((row) => row.split(" ").map(Number));

  let sumFirstDiagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    sumFirstDiagonal += arr[i][i];
  }
  let sumSecondDiagonal = 0;
  for (let j = 0; j < arr.length; j++) {
    sumSecondDiagonal += arr[j][arr.length - 1 - j];
  }
  if (sumFirstDiagonal === sumSecondDiagonal) {
    for (let k = 0; k < arr.length; k++) {
      for (let e = 0; e < arr.length; e++) {
        if (k != e && k != arr.length - 1 - e) {
          arr[k][e] = sumFirstDiagonal;
        }
      }
    }
    printMatrix(arr);
  } else {
    printMatrix(arr);
  }

  function printMatrix(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].join(" "));
    }
  }
}
diagonalAttacks([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
console.log("-----------------");
diagonalAttacks(["1 1 1", "1 1 1", "1 1 0"]);
