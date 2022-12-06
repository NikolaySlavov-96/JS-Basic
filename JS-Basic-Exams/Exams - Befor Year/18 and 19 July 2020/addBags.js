function addBags(input){

    let priceBaggageUp20 = Number(input[0]);
    let kiloBaggage = Number(input[1]);
    let dayToTravel = Number(input[2]);
    let numberBaggage = Number(input[3]);

    let allPriceToPay = 0;

    if(kiloBaggage < 10){
        allPriceToPay = (priceBaggageUp20 * 0.20)
    } else if(kiloBaggage <= 20){
        allPriceToPay = (priceBaggageUp20 * 0.50)
    } else if(kiloBaggage > 20){
        allPriceToPay = priceBaggageUp20
    }
    if(dayToTravel < 7){
        //40%
        allPriceToPay += (allPriceToPay * 0.40)
    } else if(dayToTravel <= 30){
        //15%
        allPriceToPay += (allPriceToPay * 0.15) 
    } else if(dayToTravel > 30){
        //10%
        allPriceToPay += (allPriceToPay * 0.10)
    }
    console.log(`The total price of bags is: ${((allPriceToPay) * numberBaggage).toFixed(2)} lv.`)
}

addBags(["25.50",
"5",
"36",
"6"])
