function fishingBoat(input){

    let budget = Number(input[0]);
    let season = input[1];
    let sumFishers = Number(input[2]);

    priceAfterDiscount = 0.00;
    dicountAfterSum = 0.00; 

    switch(season){
        case "Spring":
            if(sumFishers <= 6){
                priceAfterDiscount = 3000 - (3000 * 0.10)
            } else if(sumFishers >=7 && sumFishers <= 11){
                priceAfterDiscount = 3000 - (3000 * 0.15)
            } else if(sumFishers >= 12){
                priceAfterDiscount = 3000 - (3000 * 0.25)
            }
        break;
        case "Summer":
            if(sumFishers <= 6){
                priceAfterDiscount = 4200 - (4200 * 0.10)
            } else if(sumFishers >= 7 && sumFishers <= 11){
                priceAfterDiscount = 4200 - (4200 * 0.15)
            } else if(sumFishers >= 12){
                priceAfterDiscount = 4200 - (4200 * 0.25)
            }
        break;
        case "Autumn":
            if(sumFishers <= 6){
                priceAfterDiscount = 4200 - (4200 * 0.10)
            } else if(sumFishers >= 7 && sumFishers <= 11){
                priceAfterDiscount = 4200 - (4200 * 0.15)
            } else if(sumFishers >= 12){
                priceAfterDiscount = 4200 - (4200 * 0.25)
            }
        break;
        case "Winter":
            if(sumFishers <= 6){
                priceAfterDiscount = 2600 - (2600 * 0.10)
            } else if(sumFishers >=7 && sumFishers <= 11){
                priceAfterDiscount = 2600 - (2600 * 0.15)
            } else if(sumFishers >= 12){
                priceAfterDiscount = 2600 - (2600 * 0.25)
            }
        break;
    } 

    if(season !== "Autumn"){
        if(sumFishers % 2 === 0){
            dicountAfterSum = priceAfterDiscount - (priceAfterDiscount * 0.05)
        } else {
            dicountAfterSum = priceAfterDiscount
        }
    } else {
        dicountAfterSum = priceAfterDiscount
    }

    if(budget >= dicountAfterSum){
        console.log(`Yes! You have ${(budget - dicountAfterSum).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(dicountAfterSum - budget).toFixed(2)} leva.`)
    }

}


fishingBoat(["3000",
"Summer",
"11"])


