function dishwasher(input){

    let index = 0;
    let qualityBottle = Number(input[index++]);
    let command = input[index++];

    let sumPreparation = qualityBottle * 750;
    let sum = 0;
    let dishesSumT = 0;
    let dishesQualityPlate = 0;
    let dishesQualityPot = 0;

    while(command !== "End"){
        sum++;
        let dishes = command;
        if(sum === 3){
            dishesQualityPot += Number(dishes);
            dishesSumT += dishes * 15;
            sum = 0;
        } else {
            dishesQualityPlate += Number(dishes);
            dishesSumT += dishes * 5;
        }
        command = input[index++];
        if(sumPreparation < dishesSumT){
            break;
        }
    }
    if(sumPreparation >= dishesSumT){
        console.log(`Detergent was enough!`)
        console.log(`${dishesQualityPlate} dishes and ${dishesQualityPot} pots were washed.`)
        console.log(`Leftover detergent ${sumPreparation - dishesSumT} ml.`)
    } else {
        console.log(`Not enough detergent, ${dishesSumT - sumPreparation} ml. more necessary!`)
    }
}

dishwasher(["1","10","15","10","12","13","30"])