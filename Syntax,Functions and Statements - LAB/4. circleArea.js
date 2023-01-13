function circleArea(input) {
   
    if(typeof(input) === 'number'){
        let radius = input ** 2 * Math.PI;
        console.log(radius.toFixed(2));
    }else{
        
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
    }

   
}
circleArea(5);
circleArea('name')