function pieceOfPie(arr, startEl, endEl) {
    
        const indexStr = arr.indexOf(startEl);
        const indexEnd = arr.indexOf(endEl);
        const result = arr.slice(indexStr, indexEnd + 1);
   
   
   
    
    return result;
    
}
console.log(pieceOfPie(['Pumpkin Pie','Key Lime Pie','Cherry Pie',
'Lemon Meringue Pie','Sugar Cream Pie'],
'Key Lime Pie','Lemon Meringue Pie'));
console.log('-------------------------');
pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 
'Butter Chicken Pie', 'Smoked Fish Pie'], 
'Pot Pie', 'Smoked Fish Pie');
