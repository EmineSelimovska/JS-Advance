function dayOfWeek(day) {
    let number;
    if(day === 'Monday'){
        number = 1;
        console.log(number);

    }else if(day === 'Tuesday'){
        number = 2;
        console.log(number);
    }else if(day === 'Wednesday'){
        number = 3;
        console.log(number);
    }else if(day === 'Thursday'){
        number = 4;
        console.log(number);
    }else if (day === 'Friday'){
        number = 5;
        console.log(number);
    }else if(day === 'Saturday'){
        number = 6;
        console.log(number);
    }else if(day === 'Sunday'){
        number = 7;
        console.log(number);
    }else {
        console.log('error');
    }
    
}
dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');