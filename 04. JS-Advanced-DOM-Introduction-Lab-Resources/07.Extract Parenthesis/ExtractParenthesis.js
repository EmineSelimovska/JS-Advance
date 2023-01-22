function extract(elementId) {
    let cont = document.getElementById(elementId).textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = [];

    let match = pattern.exec(cont);
    while (match) {
        result.push(match[1]);
        match = pattern.exec(cont);
        
    }
    return result.join('; ');

}