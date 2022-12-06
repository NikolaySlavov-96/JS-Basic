function flowerShop(input){

    let magnolia = Number(input[0]);
    let zumbul = Number(input[1]);
    let rozi = Number(input[2]);
    let kaktus = Number(input[3]);
    let priceGift = Number(input[4]);

    let priceMagnolia = magnolia * 3.25;
    let sumZumbul = zumbul * 4;
    let priceRozi = rozi * 3.5;
    let priceKaktus = kaktus * 8.0;

    let sumInvoice = (priceMagnolia + sumZumbul + priceRozi + priceKaktus) * 0.95;

    if(sumInvoice >= priceGift){
        console.log(`She is left with ${Math.floor(sumInvoice - priceGift)} leva.`)
    } else {
        console.log(`She will have to borrow ${Math.ceil(priceGift - sumInvoice)} leva.`)
    }
}

flowerShop(["2" , "3" , "5" , "1" , "50"]);