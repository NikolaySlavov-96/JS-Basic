function worldSnookerChampionship(input){

    let circleFinal = input[0];
    let typeBillet = input[1];
    let qualityBillet = Number(input[2]);
    let pictureTrophies = input[3];

    let allPayPrice = 0;

    switch(circleFinal){
        case "Quarter final": 
            switch(typeBillet){
                case "Standard": allPayPrice = qualityBillet * 55.50; break;
                case "Premium": allPayPrice = qualityBillet * 105.20; break;
                case "VIP": allPayPrice = qualityBillet * 118.90; break;
            }
        break; 
        case "Semi final":
            switch(typeBillet){
                case "Standard": allPayPrice = qualityBillet * 75.88; break;
                case "Premium": allPayPrice = qualityBillet * 125.22; break;
                case "VIP": allPayPrice = qualityBillet * 300.40; break;
            }
        break;
        case "Final":
            switch(typeBillet){
                case "Standard": allPayPrice = qualityBillet * 110.10; break;
                case "Premium": allPayPrice = qualityBillet * 160.66; break;
                case "VIP": allPayPrice = qualityBillet * 400; break;
            }
        break; 
    }

    if(allPayPrice > 4000){
        allPayPrice *= 0.75;
        if(pictureTrophies === "Y"){
            allPayPrice -= qualityBillet * 40;
        }
    } else if(allPayPrice > 2500){
        allPayPrice *= 0.90;
    }
    
    if(pictureTrophies === "Y"){
        allPayPrice +=  qualityBillet * 40;
    }


    console.log((allPayPrice).toFixed(2))
}

worldSnookerChampionship(["Final",
"Premium",
"25",
"Y"])




