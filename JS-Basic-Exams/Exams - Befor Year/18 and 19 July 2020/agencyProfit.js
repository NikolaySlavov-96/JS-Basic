function agencyProfit(input){

    let nameAirCompany = input[0];
    let qualityBilletAdult = Number(input[1]);
    let qualityBilletKids = Number(input[2]);
    let netSumBilletAdult = Number(input[3]);
    let priceServiceFee = Number(input[4]);

    let priceKidsBillet = netSumBilletAdult * 0.30;

    let allSellKidsBillet = qualityBilletKids * (priceKidsBillet + priceServiceFee);
    let allSellAdultBillet = qualityBilletAdult * (netSumBilletAdult + priceServiceFee);

    let sum = allSellAdultBillet + allSellKidsBillet 

    console.log(`The profit of your agency from ${nameAirCompany} tickets is ${(sum * 0.20).toFixed(2)} lv.`)
}

agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])
