function sleepyTomCat(input){
     
    let dayOff = Number(input[0]);

    let dayOffs = dayOff * 127;
    let workDays = (365 - dayOff) * 63;

    let tomSleeps = dayOffs + workDays;
    let tomSleepM = dayOffs + workDays;
    if (tomSleepM < 30000){
        tomSleepM = 30000 - (dayOffs + workDays);
    } else {
        tomSleepM = (dayOffs + workDays) - 30000
    }
    let tomH = Math.floor(tomSleepM / 60);
    let tomM = tomSleepM % 60;
    
    if(tomSleeps <=30000){
        console.log("Tom sleeps well");
        console.log(`${tomH} hours and ${tomM} minutes less for play`)
        
    } else { 
        console.log("Tom will run away");
        console.log(`${tomH} hours and ${tomM} minutes more for play`)
    }
}

sleepyTomCat(["113"])