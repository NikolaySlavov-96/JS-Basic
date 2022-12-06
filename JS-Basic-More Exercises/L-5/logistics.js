function logistics(input){

    let index = 0;
    let cargo = Number(input[index++]);
    let cargoLoad = Number(input[index++]);

    let allCargo = 0;
    let cargoToMicrobus = 0;
    let cargoToTruck = 0;
    let cargoToTrain = 0;
    

    for(let n = 1; n <= cargo; n++){
        if(cargoLoad <= 3){
            allCargo += Number(cargoLoad);
            cargoToMicrobus += Number(cargoLoad);
        } else if(cargoLoad <= 11){
            allCargo += Number(cargoLoad);
            cargoToTruck += Number(cargoLoad);
        } else if(cargoLoad >= 12){
            allCargo += Number(cargoLoad);
            cargoToTrain += Number(cargoLoad);
        }
        cargoLoad = input[index++];
    }
    let sumPriceMicrobus = cargoToMicrobus * 200;
    let sumPriceTruck = cargoToTruck * 175;
    let sumPriceTrain = cargoToTrain * 120;

    console.log(`${((sumPriceMicrobus + sumPriceTrain + sumPriceTruck) / allCargo).toFixed(2)}`)    
    console.log(`${((cargoToMicrobus / allCargo) * 100).toFixed(2)}%`)
    console.log(`${((cargoToTruck / allCargo) * 100).toFixed(2)}%`)
    console.log(`${((cargoToTrain / allCargo) * 100).toFixed(2)}%`)
}

logistics([ '8', '1', '5', '16', '3', '2', '6', '18', '5'])