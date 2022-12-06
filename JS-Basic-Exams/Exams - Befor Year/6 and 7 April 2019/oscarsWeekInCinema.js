function oscarsWeekInCinema(input){

    let nameFilm = input[0];
    let typeHall = input[1];
    let countryBuyBillet = Number(input[2]);

    let allPayPrice = 0;

    switch(nameFilm){
        case "A Star Is Born":
            switch(typeHall){
                case "normal": allPayPrice = countryBuyBillet * 7.50; break;
                case "luxury": allPayPrice = countryBuyBillet * 10.50; break;
                case "ultra luxury": allPayPrice = countryBuyBillet * 13.50; break;
            }
        break;
        case "Bohemian Rhapsody":
            switch(typeHall){
                case "normal": allPayPrice = countryBuyBillet * 7.35; break;
                case "luxury": allPayPrice = countryBuyBillet * 9.45; break;
                case "ultra luxury": allPayPrice = countryBuyBillet * 12.75; break;
            }
        break;
        case "Green Book":
            switch(typeHall){
                case "normal": allPayPrice = countryBuyBillet * 8.15; break;
                case "luxury": allPayPrice = countryBuyBillet * 10.25; break;
                case "ultra luxury": allPayPrice = countryBuyBillet * 13.25; break;
            }
        break;
        case "The Favourite":
            switch(typeHall){
                case "normal": allPayPrice = countryBuyBillet * 8.75; break;
                case "luxury": allPayPrice = countryBuyBillet * 11.55; break;
                case "ultra luxury": allPayPrice = countryBuyBillet * 13.95; break;
            }
        break;
    }
    console.log(`${nameFilm} -> ${(allPayPrice).toFixed(2)} lv.`)
}

oscarsWeekInCinema(["A Star Is Born",
"luxury",
"42"])
