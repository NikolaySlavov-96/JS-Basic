function paintingEggs(input){

    let sizeEggs = input[0];
    let colorEggs = input[1];
    let qualityEggs = Number(input[2]);

    let allSellEggs = 0;

    switch(sizeEggs){
        case "Large":
            switch(colorEggs){
                case "Red": allSellEggs = qualityEggs * 16; break;
                case "Green": allSellEggs = qualityEggs * 12; break;
                case "Yellow": allSellEggs = qualityEggs * 9; break;
            }
        break;
        case "Medium":
            switch(colorEggs){
                case "Red": allSellEggs = qualityEggs * 13; break;
                case "Green": allSellEggs = qualityEggs * 9; break;
                case "Yellow": allSellEggs = qualityEggs * 7; break;
            }
        break;
        case "Small":
            switch(colorEggs){
                case "Red": allSellEggs = qualityEggs * 9; break;
                case "Green": allSellEggs = qualityEggs * 8; break;
                case "Yellow": allSellEggs = qualityEggs * 5; break;
            }
        break;
    }
    let expense = allSellEggs * 0.35;
    
    console.log(`${(allSellEggs - expense).toFixed(2)} leva.`)
}

paintingEggs(["Large",
"Red",
"7"])
