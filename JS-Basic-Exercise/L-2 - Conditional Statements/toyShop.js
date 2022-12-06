function toyShop(input){ 

    let priceTravel = Number(input[0]);
    let valuePuzzle = Number(input[1]);
    let talkingDoll = Number(input[2]);
    let tediBell = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    result = 0;

    let sumPuzzle = valuePuzzle * 2.6;
    let sumDoll = talkingDoll * 3;
    let sumTediBell = tediBell * 4.1;
    let sumMinions = minions * 8.2;
    let sumTrucks = trucks * 2;

    let sumToysPrice = sumPuzzle + sumDoll + sumTediBell + sumMinions + sumTrucks
    let sumToys = valuePuzzle + talkingDoll + tediBell + minions + trucks
    
    if (sumToys >= 50){
        result = sumToysPrice * 0.25
    }

    let endPrise = sumToysPrice - result; 
    let rent = endPrise * 0.10; 

    let profit = endPrise - rent 

    if (profit >= priceTravel){
        console.log(`Yes! ${(profit - priceTravel).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(priceTravel - profit).toFixed(2)} lv needed.`);
    }
}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"]);