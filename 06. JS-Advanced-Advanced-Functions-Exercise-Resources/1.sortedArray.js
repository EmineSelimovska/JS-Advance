function sortedArray(input, command) {
  return command == "asc"
    ? input.sort((a, b) => a - b)
    : input.sort((a, b) => b - a);
}
console.log(sortedArray([14, 7, 17, 6, 8], "asc"));
console.log(sortedArray([14, 7, 17, 6, 8], 'desc'));
