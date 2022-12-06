function tennisEquipment(input){

    let rocket = Number(input[0]);
    let qualityRocket = Number(input[1]);
    let qualitySneaker = Number(input[2]);

    let priceSneaker = rocket / 6;
    let priceSumAllRocket = rocket * qualityRocket;
    let priceSumSneaker = priceSneaker * qualitySneaker;

    let sumOther = (priceSumAllRocket + priceSumSneaker) * 0.20;

    let allPayPrice = sumOther + priceSumAllRocket + priceSumSneaker;

    console.log(`Price to be paid by Djokovic ${Math.floor(allPayPrice / 8)}`)
    console.log(`Price to be paid by sponsors ${Math.ceil(allPayPrice * 0.875)}`)
}

tennisEquipment(["850" , "4" , "2"])