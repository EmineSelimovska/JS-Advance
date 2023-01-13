function previousDay(years,month,day) {
    const date = new Date(years,month - 1,day - 1);
    const year = date.getFullYear();
    const months = date.getMonth() + 1;
    const days = date.getDate();
    
    console.log(`${year}-${months}-${days}`);
    
}
previousDay(2016, 9, 30);
previousDay(2015, 5, 10);