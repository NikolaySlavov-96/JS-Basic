function fuelTankPart2(input){

    let typeFuel = input[0];
    let sumFuel = Number(input[1]);
    let Card = input[2];
    price = 0.00;

    if(Card === "Yes"){
        if(typeFuel === "Gasoline"){
            price = (sumFuel * (2.22 - 0.18));
        } else if(typeFuel === "Diesel"){
            price = (sumFuel * (2.33- 0.12));
        } else if(typeFuel === "Gas"){
            price = (sumFuel * (0.93 - 0.08));
        }
    } else {
        if(typeFuel === "Gasoline"){
            price = (sumFuel * 2.22);
        } else if(typeFuel === "Diesel"){
            price = (sumFuel * 2.33);
        } else if(typeFuel === "Gas"){
            price = (sumFuel * 0.93);
        }
    }

    if(sumFuel <= 25 && sumFuel >= 20){
        console.log(`${(price - (price * 0.08)).toFixed(2)} lv.`);
    } else if(sumFuel > 25){
        console.log(`${(price - (price * 0.10)).toFixed(2)} lv.`);
    } else {
        console.log(`${(price).toFixed(2)} lv.`);
    }
}

fuelTankPart2(["Diesel" , "19" , "No"]);