function roomPainting(input){

    let paint = Number(input[0]);
    let tape = Number(input[1]);
    let priceHandGlove = Number(input[2]);
    let priceBrush = Number(input[3]);

    let sumPaint = paint * 21.50;
    let sumTape = tape * 5.20;

    let sumHandGlove = Math.ceil(tape * 0.35);
    let sumBrush = Math.floor(paint * 0.48);

    let priceAllHandGlove = sumHandGlove * priceHandGlove;
    let priceAllBrush = sumBrush * priceBrush;

    let finalPriceBefore = priceAllBrush + priceAllHandGlove + sumPaint + sumTape;

    let priceDelivery = finalPriceBefore / 15;

    console.log(`This delivery will cost ${(priceDelivery).toFixed(2)} lv.`)
}

roomPainting(["10","8","2.2","5"])