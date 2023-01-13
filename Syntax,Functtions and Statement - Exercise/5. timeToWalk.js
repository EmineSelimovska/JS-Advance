function timeToWalk(steps,stepsLength,speed) {
    let distanceInMiters = steps * stepsLength;
    let speedInSecond = speed / 3.6;
    let rest = Math.floor(distanceInMiters /500) * 60;
    let time = distanceInMiters /speedInSecond + rest;
    let hours = Math.floor(time/3600);
    let minutes = Math.floor(time/60);
    let second = Math.round(time % 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${second < 10 ? '0' : ''}${second}`);


    
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);