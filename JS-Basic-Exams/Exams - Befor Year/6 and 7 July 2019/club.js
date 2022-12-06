function club(input){

    let index = 0;
    let desireWinAtClub = Number(input[index++]);
    let inputCommand = input[index++];

    let payToCocktails = 0;

    while(inputCommand !== "Party!"){
        let counterPrice = 0;
        let payThisLook = 0;

        let nameCocktails = inputCommand;
        let countryCocktails = Number(input[index++]);

        for(let n = 1; n <= nameCocktails.length; n++){
            counterPrice++;
        }

        payThisLook += counterPrice * countryCocktails;

        if(payThisLook % 2 !== 0){
            payThisLook *= 0.75;
        }
        payToCocktails += payThisLook;
        if(desireWinAtClub <= payToCocktails){
            console.log(`Target acquired.`);
            break;
        }
        nameCocktails = inputCommand;
        inputCommand = input[index++];
        if(inputCommand === "Party!"){
            console.log(`We need ${(desireWinAtClub - payToCocktails).toFixed(2)} leva more.`)
        }
    }
    console.log(`Club income - ${(payToCocktails).toFixed(2)} leva.`)
}

club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])

