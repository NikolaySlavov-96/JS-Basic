function vacation(input){

    let budget = Number(input[0]);
    let seasone = input[1];
    let place = 0;
    let location = 0;
    let price = 0;

    if(budget <= 1000){
        place = "Camp"
        switch(seasone){
            case "Summer": location = "Alaska";
            case "Summer": price = budget * 0.65; break;
            case "Winter": location = "Morocco"
            case "Winter": price = budget * 0.45; break;
        }
    } else if(budget <= 3000){
        place = "Hut"
        switch(seasone){
            case "Summer": location = "Alaska";
            case "Summer": price = budget * 0.80; break;
            case "Winter": location = "Morocco"
            case "Winter": price = budget * 0.60; break;
        }
    } else if(budget > 3000){
        place = "Hotel"
        switch(seasone){
            case "Summer": location = "Alaska";
            case "Summer": price = budget * 0.90; break;
            case "Winter": location = "Morocco"
            case "Winter": price = budget * 0.90; break;
        }
    }
    console.log(`${location} - ${place} - ${(price).toFixed(2)}`)
}
vacation(["800" , "Summer"])

//**location = "Alaska" =  */