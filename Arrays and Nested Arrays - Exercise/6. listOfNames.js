function listOfNames(arr) {
   let sorted = arr.sort((a,b) => a.localeCompare(b));
   let num = 0
    
   
   for (let i = 0; i < sorted.length ; i++) {
        num++
        console.log(`${num}.${sorted[i]}`)
  }
   

}
listOfNames(["John","Bob","Christina","Ema"]);
