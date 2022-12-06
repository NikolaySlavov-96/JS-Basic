function godzillaVsKong(input){
     
    let budget = Number(input[0]);
    let valueStatic = Number(input[1]);
    let clotherOneStatic = Number(input[2]);

    result = 0.0

    let decore = budget * 0.1
    let clother = valueStatic * clotherOneStatic

    if (valueStatic > 150){
        clother = clother * 0.9
    } 

    let priceMovie = decore + clother

    if (budget >= priceMovie){
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - priceMovie).toFixed(2)} leva left.`);
    } else {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(priceMovie - budget).toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["20000",
"120",
"55.5"])

