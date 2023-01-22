function createAssemblyLine() {
    
    return { 
        hasClima: (myCar) => {
            myCar.temp = 21;
            myCar.tempSettings = 21;
             myCar.adjustTemp = () => {
            if(myCar.temp < myCar.tempSettings){
                myCar.temp++;

            }else if(myCar.temp > myCar.tempSettings){
                myCar.temp--;
            }
        };
    
        },
        
        hasAudio: (myCar) =>{
            myCar.currentTrack = {'name': '' ,'artist': ''};
        
        myCar.nowPlaying = () => {
            if (myCar.currentTrack !== null) {
            console.log(`Now playing '${myCar.currentTrack.name}' by ${myCar.currentTrack.artist}`);
        }
    };
        },
        hasParktronic: (myCar) =>{
            myCar.checkDistance = (distance) => {
                
            
            if(checkDistance.distance < 0.1){
                console.log("Beep! Beep! Beep!");
            }else if(0.1 <= checkDistance.distance && checkDistance < 0.25){
                console.log("Beep! Beep!" );
            }else if (0.25 <= checkDistance.distance && checkDistance < 0.5){
                console.log("Beep!");
            }else{
                console.log('');
            }
            };
    }
};
    
}
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
 
const assemblyLine = createAssemblyLine(myCar);
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp); 