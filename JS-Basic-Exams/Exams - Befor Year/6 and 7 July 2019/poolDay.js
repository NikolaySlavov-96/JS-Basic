function poolDay(input){

    let countsPeople = Number(input[0]);
    let priceEntry = Number(input[1]);
    let priceOneSunLounger = Number(input[2]);
    let priceUmbrella = Number(input[3]);

    let allPriceEntry = countsPeople * priceEntry;
    let allPaidSunLounger = Math.ceil(countsPeople * 0.75);
    let allPaidUmbrella = Math.ceil(countsPeople / 2);

    let allPayPrice = allPriceEntry + (allPaidSunLounger * priceOneSunLounger) + (allPaidUmbrella * priceUmbrella)

    console.log(`${(allPayPrice).toFixed(2)} lv.`)
}

poolDay(["21",
"5.50",
"4.40",
"6.20"])
