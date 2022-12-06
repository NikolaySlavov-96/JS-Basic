function safari(input){

    let budget = Number(input[0]);
    let qualityPetrol = Number(input[1]);
    let dayOfWeek = input[2];

    let payToPetrol = qualityPetrol * 2.10;

    let payToAllTravel = payToPetrol + 100;

    switch(dayOfWeek){
        case "Saturday": payToAllTravel *= 0.90; break;
        case "Sunday": payToAllTravel *= 0.80; break;
    }

    if(budget > payToAllTravel){
        console.log(`Safari time! Money left: ${(budget - payToAllTravel).toFixed(2)} lv.`)
    } else {
        console.log(`Not enough money! Money needed: ${(payToAllTravel - budget).toFixed(2)} lv.`)
    }
}

safari(["1000",
"10",
"Sunday"])
