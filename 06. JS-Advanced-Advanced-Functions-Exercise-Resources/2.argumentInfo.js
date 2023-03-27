function argumentInfo() {
  const arr = Array.from(arguments);
  //  console.log(arr);

  let count = new Map();
  for (const el of arr) {
    const type = typeof el;
    console.log(`${type}: ${el}`);
    // console.log(`${type}: ${count}`);
    if (!count.has(type)) {
      count.set(type, 0);
    }
    count.set(type, count.get(type) + 1);
  }
  Array.from(count.entries()).sort((a, b) => b[1] - a[1]).forEach((element) =>
    console.log(`${element[0]} = ${element[1]}`))
  
}
argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
