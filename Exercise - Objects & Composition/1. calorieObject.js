function calorieOdject(arr) {
    let calorie = {};
    for(let i = 0;i < arr.length;i++){
        if(i % 2 === 0){
            calorie[arr[i]] = Number(arr[i+1])

        }
    }
    console.log(calorie);
}
calorieOdject(['Yoghurt', '48', 'Rise', '138','Apple', '52'] );
console.log('--------------');
calorieOdject(['Potato', '93', 'Skyr', '63','Cucumber', '18', 'Milk', '42']);