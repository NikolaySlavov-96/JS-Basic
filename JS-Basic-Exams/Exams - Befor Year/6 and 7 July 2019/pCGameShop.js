function pCGameShop(input){
    
    let index = 0
    let counterSellGame = Number(input[index++]);
    let nameGames = input[index++];

    let sellHearthstone = 0;
    let sellFornite = 0;
    let sellOverwatch = 0;
    let allSellGame = 0;

    for(let n = 1; n <= counterSellGame; n++){
        switch(nameGames){
            case "Hearthstone": sellHearthstone++; break;
            case "Fornite": sellFornite++; break;
            case "Overwatch": sellOverwatch++; break;
            default: allSellGame++; break;
        }
        nameGames = input[index++];
    }
    console.log(`Hearthstone - ${((sellHearthstone / counterSellGame) * 100).toFixed(2)}%`)
    console.log(`Fornite - ${((sellFornite / counterSellGame) * 100).toFixed(2)}%`)
    console.log(`Overwatch - ${((sellOverwatch / counterSellGame) * 100).toFixed(2)}%`)
    console.log(`Others - ${((allSellGame / counterSellGame) * 100).toFixed(2)}%`)
}

pCGameShop(["4",
"Hearthstone",
"Fornite",
"Overwatch",
"Counter-Strike"])
