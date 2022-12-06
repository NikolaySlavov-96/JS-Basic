function truckDriver(input){

    let seasone = input[0];
    let kilometerPerMonth = Number(input[1]);
    let moneyPer = 0;
    
    switch(seasone){
        case "Spring":
            if(kilometerPerMonth <= 5000){
                moneyPer = (kilometerPerMonth * 0.75) * 4;
            } else if(kilometerPerMonth <= 10000){
                moneyPer = (kilometerPerMonth * 0.95) * 4;
            } else if(kilometerPerMonth <= 20000){
                moneyPer = (kilometerPerMonth * 1.45) * 4;
            }
        break;
        case "Summer":
            if(kilometerPerMonth <= 5000){
                moneyPer = (kilometerPerMonth * 0.90) * 4;
            } else if(kilometerPerMonth <= 10000){
                moneyPer = (kilometerPerMonth * 1.10) * 4;
            } else if(kilometerPerMonth <= 20000){
                moneyPer = (kilometerPerMonth * 1.45) * 4;
            }
        break;
        case "Autumn":
            if(kilometerPerMonth <= 5000){
                moneyPer = (kilometerPerMonth * 0.75) * 4;
            } else if(kilometerPerMonth <= 10000){
                moneyPer = (kilometerPerMonth * 0.95) * 4;
            } else if(kilometerPerMonth <= 20000){
                moneyPer = (kilometerPerMonth * 1.45) * 4;
            }
        break;
        case "Winter":
            if(kilometerPerMonth <= 5000){
                moneyPer = (kilometerPerMonth * 1.05) * 4;
            } else if(kilometerPerMonth <= 10000){
                moneyPer = (kilometerPerMonth * 1.25) * 4;
            } else if(kilometerPerMonth <= 20000){
                moneyPer = (kilometerPerMonth * 1.45) * 4;
            }
        break;
    }
    let TAX = (moneyPer * 0.90).toFixed(2);

    console.log(TAX)
}
truckDriver(["Summer" , "3455"]);