function daysInAMonth(month,years) {
    let days = new Date(years,month,0).getDate()
   
    console.log(days);
    

    
}
daysInAMonth(1, 2012);
daysInAMonth(2, 2021);