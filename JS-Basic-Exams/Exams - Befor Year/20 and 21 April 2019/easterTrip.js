function easterTrip(input){

    let destination = input[0];
    let dateToReservation = input[1];
    let qualityNight = Number(input[2]);

    let allPayPrice = 0;

    switch(dateToReservation){
        case "21-23":
            switch(destination){
                case "France": allPayPrice = qualityNight * 30; break;
                case "Italy": allPayPrice = qualityNight * 28; break;
                case "Germany": allPayPrice = qualityNight * 32; break;
            }
        break;
        case "24-27":
            switch(destination){
                case "France": allPayPrice = qualityNight * 35; break;
                case "Italy": allPayPrice = qualityNight * 32; break;
                case "Germany": allPayPrice = qualityNight * 37; break;
            }
        break;
        case "28-31":
            switch(destination){
                case "France": allPayPrice = qualityNight * 40; break;
                case "Italy": allPayPrice = qualityNight * 39; break;
                case "Germany": allPayPrice = qualityNight * 43; break;
            }
        break;
    }
    console.log(`Easter trip to ${destination} : ${(allPayPrice).toFixed(2)} leva.`)
}

easterTrip(["Germany",
"24-27",
"5"])
