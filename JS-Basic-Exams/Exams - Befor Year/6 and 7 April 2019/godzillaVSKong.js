function godzillaVSKong(input){

    let budget = Number(input[0]);
    let countryStatus = Number(input[1]);
    let priceToClothes = Number(input[2]);

    let priceDecor = budget * 0.10;
    let priceClothes = countryStatus * priceToClothes;
    if(countryStatus > 150){
        priceClothes *= 0.90;
    }
    if(budget < (priceDecor + priceClothes)){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${((priceDecor + priceClothes) - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - (priceClothes + priceDecor)).toFixed(2)} leva left.`)
    }
}

godzillaVSKong(["20000", 
"120",
"55.5"])
