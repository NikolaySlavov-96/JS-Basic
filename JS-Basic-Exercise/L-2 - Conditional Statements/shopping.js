function shopping(input){

    let budget = Number(input[0]);
    let valueGPU = Number(input[1]);
    let valueCPU = Number(input[2]);
    let valueRAM = Number(input[3]);

    let priceGPU = valueGPU * 250;
    let priceCPU = priceGPU * 0.35;
    let priceRAM = priceGPU * 0.10;

    let sumPriceCPU = valueCPU * priceCPU;
    let sumPriceRAM = valueRAM * priceRAM; 

    let sumComponents = priceGPU + sumPriceCPU + sumPriceRAM;

    if (valueGPU > valueCPU){
        sumComponents = sumComponents * 0.85;
    }

    if (sumComponents <= budget){
        console.log(`You have ${(budget - sumComponents).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(sumComponents - budget).toFixed(2)} leva more!`);
    }
}

shopping(["920.45","3","1","1"]);


