function deerOfSanta(input){

    let dayMissing = Number(input[0])
    let eatsKG = Number(input[1])
    let eatPerDayFirst = Number(input[2])
    let eatPerDaySecont = Number(input[3])
    let eatPerDayThird = Number(input[4])

    let sumEatFirst = eatPerDayFirst * dayMissing;
    let sumEatSecont = eatPerDaySecont * dayMissing;
    let sumEatThird = eatPerDayThird * dayMissing;

    let sumEat = sumEatFirst + sumEatSecont + sumEatThird;

    if(eatsKG > sumEat){
        console.log(`${Math.floor(eatsKG - sumEat)} kilos of food left.`);
    } else{
        console.log(`${Math.ceil(sumEat - eatsKG)} more kilos of food are needed.`)
    }
}

deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])
