function movieProfit(input){

    let nameFilm = input[0];
    let qualityDay = Number(input[1]);
    let qualityBillet = Number(input[2]);
    let priceBillet = Number(input[3]);
    let purcentFeeCinema = Number(input[4]);

    let billetToDay = qualityBillet * priceBillet
    let sumSellBilletAllPeriod = billetToDay * qualityDay

    let priceToStudio = sumSellBilletAllPeriod - ((sumSellBilletAllPeriod * purcentFeeCinema) / 100)

    console.log(`The profit from the movie ${nameFilm} is ${(priceToStudio).toFixed(2)} lv.`)
}

movieProfit(["The Programmer",
"20",
"500",
"7.50",
"7"])