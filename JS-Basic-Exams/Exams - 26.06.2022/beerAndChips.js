function beerAndChips(input){

    let name = input[0];
    let budget = Number(input[1]);
    let qualityBeer = Number(input[2]);
    let qualityChips = Number(input[3]);

    let sumPriceBeer = qualityBeer * 1.20;
    let sumPriceChips = sumPriceBeer * 0.45;
    let sumPriceAllChip = Math.ceil(sumPriceChips * qualityChips);

    let sumsss = sumPriceBeer + sumPriceAllChip;

    if(budget >= sumsss){
        console.log(`${name} bought a snack and has ${(budget - sumsss).toFixed(2)} leva left.`)
    } else {
        console.log(`${name} needs ${(sumsss - budget).toFixed(2)} more leva!`)
    }
}
beerAndChips(["George",
"10",
"2",
"3"])
