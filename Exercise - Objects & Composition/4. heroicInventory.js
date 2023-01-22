function heroicInventory(arr) {
      let result = [];
     
    for (const hero of arr) {
        let [name,level, item] = hero.split(' / ');
       const heroes = {
        name: name,
        level:Number(level),
        items: item ? item.split(', ') : [],


       }

        result.push(heroes)
    }
    return JSON.stringify(result);
}
console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));