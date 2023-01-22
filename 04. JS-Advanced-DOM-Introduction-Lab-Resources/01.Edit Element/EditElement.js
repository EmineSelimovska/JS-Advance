function editElement(ref, match, replacer) {
    const text = ref.textContent;
    const matcher = new RegExp(match,'g');
    const editor = text.replace(matcher,replacer)
    ref.textContent = editor; 
    
}