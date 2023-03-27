function calculator() {
    let num1;
    let num2; 
    let result; 
   return {
        init: (selector1,selector2,resultSelector) => {
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        
        add: () =>  (result.value =  +num1.value + +num2.value),
        subtract: () => (result.value =  +num1.value - +num2.value),
    
    };
}
const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result'); 




