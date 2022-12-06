function footballSouvenirs(input){

    let country = input[0];
    let type = input[1];
    let quality = Number(input[2]);
    
    let endPrice = 0;
    let isCorrect = false;

    switch(country){
        case "Argentina":
            switch(type){
                case "flags": endPrice = (quality * 3.25); break;
                case "caps": endPrice = (quality * 7.20); break;
                case "posters":endPrice = (quality * 5.10); break;
                case "stickers":endPrice = (quality * 1.25); break;
                default: isCorrect = true; console.log('Invalid stock!')
            }
        break;
        case "Brazil":
            switch(type){
                case "flags":endPrice = (quality * 4.20); break;
                case "caps":endPrice = (quality * 8.50); break;
                case "posters":endPrice = (quality * 5.35); break;
                case "stickers":endPrice = (quality * 1.20); break;
                default: isCorrect = true; console.log('Invalid stock!')
            }
        break;
        case "Croatia":
            switch(type){
                case "flags":endPrice = (quality * 2.75); break;
                case "caps":endPrice = (quality * 6.90); break;
                case "posters":endPrice = (quality * 4.95); break;
                case "stickers":endPrice = (quality * 1.10); break;
                default: isCorrect = true; console.log('Invalid stock!')
            }
        break;
        case "Denmark":
            switch(type){
                case "flags":endPrice = (quality * 3.10); break;
                case "caps":endPrice = (quality * 6.50); break;
                case "posters":endPrice = (quality * 4.80); break;
                case "stickers":endPrice = (quality * 0.90); break;
                default: isCorrect = true; console.log('Invalid stock!')
            }
        break;
        default: isCorrect = true; console.log('Invalid country!')
    }
    if(isCorrect === false){
        console.log(`Pepi bought ${quality} ${type} of ${country} for ${(endPrice).toFixed(2)} lv.`)
    }
}

footballSouvenirs(["Brazil", 
"stickers",
"5"])
