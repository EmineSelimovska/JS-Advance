function gcd(num1,num2) {
   while(num2){
    let great = num2;
    num2 = num1 % num2;
    num1 = great;
   }
  
    console.log(num1);
}
gcd(15, 5);
gcd(2154, 458)