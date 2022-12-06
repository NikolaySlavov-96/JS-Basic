function harvest(input){

    let kvMeters = Number(input[0]);
    let grossOfOneKvMeter = Number(input[1]);
    let litterWine = Number(input[2]);
    let personal = Number(input[3]);

    let sumGross = kvMeters * grossOfOneKvMeter; 
    let sumPurcent = (0.40 * sumGross) / 2.5;
    
    if (sumPurcent >= litterWine){
        console.log(`Good harvest this year! Total wine: ${Math.ceil(sumPurcent)} liters.
        ${Math.ceil(sumPurcent - litterWine)} liters left -> ${Math.ceil((sumPurcent - litterWine)/ personal)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(litterWine - sumPurcent)} liters wine needed.`)
    }
}

harvest(["650" , "2" , "175" , "3"]);

