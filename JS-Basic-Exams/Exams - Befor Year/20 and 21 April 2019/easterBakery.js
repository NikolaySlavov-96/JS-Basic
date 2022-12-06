function easterBakery(input){

    let priceFlourKg = input[0];
    let flourKG = input[1];
    let sugarKg = input[2];
    let qualityEggsPeel = input[3];
    let packageYeast = input[4];

    let paySugar = priceFlourKg * 0.75;
    let payEggsPeel = priceFlourKg * 1.10;
    let sumPackageYeast = paySugar * 0.20;
    let allPayPrice = (flourKG * priceFlourKg) + (sugarKg * paySugar) + (qualityEggsPeel * payEggsPeel) + (packageYeast * sumPackageYeast)

    console.log((allPayPrice).toFixed(2))
}

easterBakery(["63.44",
"3.57",
"6.35",
"8",
"2"])
