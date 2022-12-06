function foodDelivery (input) {
    let пилешкоМеню = (input[0]) * 10.35;
    let менюСРиба = (input[1]) * 12.4;
    let вегетарясноменю = (input[2]) * 8.15;

    let cena = пилешкоМеню + менюСРиба + вегетарясноменю;
    let десерт = cena * 0.20;
    let ценаНаПоръчката = cena + десерт + 2.5;

    console.log(ценаНаПоръчката);
}

foodDelivery(["9" , "2" , "6"]);
