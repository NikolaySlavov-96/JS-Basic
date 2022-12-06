function bikeRace(input){
 
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let track = String(input[2]);

    let price = 0;

    switch(track){
        case "trail": price = (juniors * 5.50) + (seniors * 7); break;
        case "cross-country":price = (juniors * 8) + (seniors * 9.50);
            if((seniors + juniors) >= 50){
                price = price * 0.75
            }
            break;
        case "downhill":price = (juniors * 12.25) + (seniors * 13.75); break;
        case "road": price = (juniors * 20) + (seniors * 21.50); break;
    }
    console.log((price * 0.95).toFixed(2))
}
bikeRace(["30" , "25" , "cross-country"])