function sortAnArray(arr) {
    let sort = arr.sort((a,b) => a.length - b.length || a.localeCompare(b));
    console.log(sort.join('\n'));
}
sortAnArray(['alpha','beta', 'gamma']);
console.log('---------------');
sortAnArray(['Isacc', 'Theodor','Jack', 'Harrison', 'George']);
console.log('-------------------------');
sortAnArray(['test', 'Deny','omen', 'Default']);