function coffeeMachine(input){

    let drinks = input[0];
    let sugar = input[1];
    let countryDrinks = Number(input[2]);

    let allBuyDrinks = 0;

    let allPayPrice = 0;

    switch(sugar){
        case "Without":
            switch(drinks){
                case "Espresso": allBuyDrinks += countryDrinks; allPayPrice = countryDrinks * 0.90; break;
                case "Cappuccino": allBuyDrinks += countryDrinks; allPayPrice = countryDrinks * 1.00; break;
                case "Tea": allBuyDrinks += countryDrinks; allPayPrice = countryDrinks * 0.50; break;
            }
            allPayPrice *= 0.65;
        break;
        case "Normal":
            switch(drinks){
                case "Espresso": allBuyDrinks += countryDrinks; allPayPrice = countryDrinks * 1.00; break;
                case "Cappuccino": allBuyDrinks += countryDrinks; allPayPrice = countryDrinks * 1.20; break;
                case "Tea": allBuyDrinks += countryDrinks; allPayPrice = countryDrinks * 0.60; break;
            }
        break;
        case "Extra":
            switch(drinks){
                case "Espresso": allBuyDrinks += countryDrinks; allPayPrice = countryDrinks * 1.20; break;
                case "Cappuccino": allBuyDrinks += countryDrinks; allPayPrice = countryDrinks * 1.60; break;
                case "Tea": allBuyDrinks += countryDrinks; allPayPrice = countryDrinks * 0.70; break;
            }
        break;
    }
    if(countryDrinks > 5 && drinks === "Espresso") { 
        allPayPrice *= 0.75;
    }

    if(allPayPrice > 15){
        allPayPrice *= 0.80;
    }

    console.log(`You bought ${allBuyDrinks} cups of ${drinks} for ${(allPayPrice).toFixed(2)} lv.`)
}

coffeeMachine(["Espresso",
"Without",
"100"])
