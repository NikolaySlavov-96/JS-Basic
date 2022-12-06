function Fishland (input){
    let priceMackeler = Number(input[0]);
    let priceToy = Number(input[1]);
    let kgBonito = Number(input[2]);
    let kgHorseMackerel = Number(input[3]);
    let kgMussels = Number(input[4]);
   
    let priceMussels = 7.5; 

    let priceBonito = priceMackeler + (priceMackeler * 0.60);
    let priceHorseMackerel = priceToy + (priceToy * 0.80);

    let sumBonito = kgBonito * priceBonito;
    let sumHorseMackerel = kgHorseMackerel * priceHorseMackerel;
    let sumMussels = kgMussels * priceMussels;

    let sumPaid =sumBonito + sumHorseMackerel + sumMussels;
    let sumPaidZero = sumPaid.toFixed(2)

    console.log(sumPaidZero);

}

Fishland(["5.55" , "3.57" , "4.3" , "3.6" , "7"]);


//5.55 - 3.57 - 4.3 - 3.6 - 7	
//113.82
