function oscarsCeremony(input){

    let rentalHall = Number(input[0]);

    let priceStatuette =rentalHall * 0.70;
    let priceCatering = priceStatuette * 0.85;
    let priceSounding = priceCatering / 2;

    let allPayToHall = rentalHall + priceCatering + priceSounding + priceStatuette;

    console.log((allPayToHall).toFixed(2))
}

oscarsCeremony(["3500"])