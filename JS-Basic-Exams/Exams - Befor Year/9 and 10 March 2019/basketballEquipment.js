function basketballEquipment(input){

    let yearFeePrice = Number(input[0]);

    let basketballSneaker = yearFeePrice * 0.60;
    let basketballTeam = basketballSneaker * 0.80;
    let basketballBall = basketballTeam / 4;
    let basketballAccessories = basketballBall / 5;

    console.log((yearFeePrice + basketballSneaker + basketballTeam + basketballBall + basketballAccessories).toFixed(2))
}

basketballEquipment(["320"])