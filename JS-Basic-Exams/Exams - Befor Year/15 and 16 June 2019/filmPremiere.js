function filmPremiere(input){

    let nameFilm = input[0];
    let packetToFilm = input[1];
    let qualityBillet = Number(input[2]);

    let sumToAll = 0;

    switch(nameFilm){
        case "John Wick":
            switch(packetToFilm){
                case "Drink": sumToAll = qualityBillet * 12; break;
                case "Popcorn": sumToAll = qualityBillet * 15; break;
                case "Menu": sumToAll = qualityBillet * 19; break;
            }
        break;
        case "Star Wars":
            switch(packetToFilm){
                case "Drink": sumToAll = qualityBillet * 18; 
                    if(qualityBillet >= 4){
                        sumToAll *= 0.70;
                    }
                break;
                case "Popcorn": sumToAll = qualityBillet * 25;
                    if(qualityBillet >= 4){
                        sumToAll *= 0.70;
                    }
                break;
                case "Menu": sumToAll = qualityBillet * 30;
                    if(qualityBillet >= 4){
                        sumToAll *= 0.70;
                    }
                break;     
            }
        break;
        case "Jumanji":
            switch(packetToFilm){
                case "Drink": sumToAll = qualityBillet * 9; 
                    if(qualityBillet === 2){
                        sumToAll *= 0.85;
                    }
                break;
                case "Popcorn": sumToAll = qualityBillet * 11;
                    if(qualityBillet === 2){
                        sumToAll *= 0.85;
                    }
                break;
                case "Menu": sumToAll = qualityBillet * 14;
                    if(qualityBillet === 2){
                        sumToAll *= 0.85;
                    }
                break;     
            }
        break;
    }
    console.log(`Your bill is ${(sumToAll).toFixed(2)} leva.`)
}

filmPremiere(["Jumanji",
"Drink",
"2"])
