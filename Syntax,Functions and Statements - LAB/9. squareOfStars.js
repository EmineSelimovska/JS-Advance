function squareOfStars(num) {
    
if(num === null || num === ' ' || num === 0){
    for (let i = 0; i < 5; i++) {
        let n = i;
        n = '* '
        console.log(`${n.repeat(5).trim() }`);
    }
}else{
    for (let j = 0; j < num; j++){
        let m = j;
        m = '* ';
        
      console.log(`${m.repeat(num).trim()}`);
      
        
    }
}
    
}
squareOfStars(1);
console.log('-----------------');
squareOfStars(2);
console.log('-----------------');
squareOfStars(5);