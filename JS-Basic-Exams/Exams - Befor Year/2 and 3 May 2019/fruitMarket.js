function fruitMarket(Strawberry , Banana , Orange , Raspberries , StrawberryQt){
    
    let priceStrawberry = Number(Strawberry);
    let qualityBanana = Number(Banana);
    let qualityOrange = Number(Orange);
    let qualityRaspberries = Number(Raspberries);
    let qualityStrawberry = Number(StrawberryQt);

    let priceRaspberries = priceStrawberry * 0.50;
    let priceOrange = priceRaspberries * 0.60;
    let priceBanana = priceRaspberries * 0.20;

    let sumStrawberry = qualityStrawberry * priceStrawberry;
    let sumBanana = priceBanana * qualityBanana;
    let sumOrange = priceOrange * qualityOrange;
    let sumRaspberries = priceRaspberries * qualityRaspberries;

    let allPaySum = sumStrawberry + sumBanana + sumOrange + sumRaspberries;

    console.log((allPaySum).toFixed(2));
}

fruitMarket("63.5","3.57" , "6.35" , "8.15" , "2.5")