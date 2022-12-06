function changeBureau(input){

    let qualityBitcoin = input[0];
    let qualityChineQan = input[1];
    let feeInTrader = input[2];

    let sumBitcoinToLV = qualityBitcoin * 1168;
    let sumCineQanToLV = (qualityChineQan * 0.15) * 1.76;
    let sumAllValueToEU = (sumBitcoinToLV + sumCineQanToLV) / 1.95;
    let allSellPrice = sumAllValueToEU * ((100 - feeInTrader) / 100);

    console.log((allSellPrice).toFixed(2))
}
changeBureau(["1",
"5",
"5"])
