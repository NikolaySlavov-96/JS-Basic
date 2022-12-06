function santasHoliday(input){

    let days = Number(input[0]) - 1;
    let typeRoom = input[1];
    let value = input[2];

    let price = 0;

    switch(typeRoom){
        case "room for one person": price = days * 18; break;
        case "apartment": 
        price = days * 25;
        if(days < 10){
            price *= 0.70;
        } else if(days < 15){
            price *= 0.65;
        } else if(days > 15){
            price *=0.50;
        }
    break;
        case "president apartment":
            price = days * 35;
            if(days < 10){
                price *= 0.90;
            } else if(days < 15){
                price *= 0.75;
            } else if(days > 15){
                price *= 0.80;
            }
    break;
    }

    if(value !== "negative"){
        price = price + (price * 0.25)
        console.log(price.toFixed(2))
    } else { 
        price = price - (price * 0.10)
        console.log(price.toFixed(2))
    }
}

santasHoliday(["30",
"president apartment",
"negative"])
