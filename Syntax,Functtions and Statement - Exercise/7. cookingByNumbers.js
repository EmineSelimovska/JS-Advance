function cookingByNumbers(...arr) {
    let num = Number(arr[0]);
    for (let i = 1; i <= arr.length;i++) {
        let command = arr[i];
        switch (command) {
            case 'chop':
                num /= 2;
                console.log(num);
                break;
        
           case 'dice':
            num = Math.sqrt(num);
            console.log(num);
            
                break;
            case 'spice':
                num += 1;
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);
                break;
            case 'fillet':
                num = num - num * 0.2;
                console.log(num);
                break;
        }
    }
    
    
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('--------------------------------------------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet');