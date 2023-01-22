function addAndRemoveElements(arr) {
    let newArr = [];
    let operation = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        operation++;

        switch (element) {
            case 'add':
               newArr.push(operation);
                break;
        
            case 'remove':
                newArr.splice(newArr.length - 1,1);
               //newArr.pop(i);
               
                break;
           
        }
        
    }
    if(newArr.length === 0){
        console.log("Empty");
    }else{
        console.log(newArr.join('\n'));
    }
    
}
addAndRemoveElements(['add','add','add','add'] );
console.log('------------------------');
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
console.log('-----------------------');
addAndRemoveElements(['remove', 'remove', 'remove']);