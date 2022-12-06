function skiTrip(input){

    let dayHoliday = Number(input[0]) - 1;
    let room = input[1];
    let evaluation = input[2];
    let priceHolyday = 0;

    switch(room){
        case "room for one person": priceHolyday = dayHoliday * 18; break;
        case "apartment":
            priceHolyday = dayHoliday * 25;
            if(dayHoliday < 10){
                priceHolyday = priceHolyday * 0.70;
            } else if(dayHoliday < 15){
                priceHolyday = priceHolyday * 0.65;
            } else if(dayHoliday > 15){
                priceHolyday = priceHolyday * 0.50;
            }
        break;
        case "president apartment":
            priceHolyday = dayHoliday * 35;
            if(dayHoliday < 10){
                priceHolyday = priceHolyday * 0.90;
            } else if(dayHoliday < 15){
                priceHolyday = priceHolyday * 0.85;
            } else if(dayHoliday > 15){
                priceHolyday = priceHolyday * 0.80;
            }
        break;
    }
    if(evaluation === "positive"){
        priceHolyday = priceHolyday * 1.25
    } else if( evaluation === "negative"){
        priceHolyday = priceHolyday * 0.90
    }
    console.log((priceHolyday).toFixed(2))
}
skiTrip(["30",
"president apartment",
"negative"])