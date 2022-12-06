function easterParty(input){

    let qualityGuest = input[0];
    let priceReservePerOne = input[1];
    let budget = input[2];
    if(qualityGuest < 10){

    } else if(qualityGuest >= 10 && qualityGuest <= 15){
        //15
        priceReservePerOne *= 0.85;
    } else if(qualityGuest <= 20){
        //20
        priceReservePerOne *= 0.80;
    } else if(qualityGuest > 20){
        //25
        priceReservePerOne *= 0.75;
    }
    let cakePie = budget * 0.10;
    let allPay = (qualityGuest * priceReservePerOne) + cakePie;
       
    if(budget > allPay){
        console.log(`It is party time! ${(budget - allPay).toFixed(2)} leva left.`)
    } else {
        console.log(`No party! ${(allPay - budget).toFixed(2)} leva needed.`)
    }
}

easterParty(["18",
"30",
"450"])



