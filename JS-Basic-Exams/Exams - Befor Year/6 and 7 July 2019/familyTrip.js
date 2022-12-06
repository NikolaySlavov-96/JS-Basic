function familyTrip(input){

    let budget = Number(input[0]);
    let counterNights = Number(input[1]);
    let priceNights = Number(input[2]);
    let percentAdditionalExpense = Number(input[3]);

    if(counterNights > 7) {
        priceNights *= 0.95;
    }

    let additionExpense = budget * percentAdditionalExpense / 100;

    let allPayToNight = counterNights * priceNights + additionExpense;

    if(allPayToNight <= budget){
        console.log(`Ivanovi will be left with ${(budget - allPayToNight).toFixed(2)} leva after vacation.`)
    } else {
        console.log(`${(allPayToNight - budget).toFixed(2)} leva needed.`)
    }
}

familyTrip(["800.50",
"8",
"100",
"2"])
