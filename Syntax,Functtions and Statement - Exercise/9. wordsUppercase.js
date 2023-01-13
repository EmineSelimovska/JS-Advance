function wordsUpperCase(words) {
    const pattern = /[A-z0-9]+/g;
    let result = words.match(pattern);
    console.log(result.join(', ').toUpperCase());
    
}
wordsUpperCase('Hi, how are you?');
wordsUpperCase('hello');