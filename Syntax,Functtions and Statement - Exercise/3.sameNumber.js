function sameNumber(number) {
    let n = String(number);
    let sum = 0;
    let isTrue = true;
    
    for (let i = 0; i < n.length; i++) {
       let digits = n[i];
       let digit = n[i + 1];
       if(i < n.length - 1){
        if(digits !== digit){
            isTrue = false;
           }
        }
       
       sum += Number(digits);
        
    }
   console.log(isTrue);
   console.log(sum);
   
    
}
sameNumber(2222222);
sameNumber(1234);
