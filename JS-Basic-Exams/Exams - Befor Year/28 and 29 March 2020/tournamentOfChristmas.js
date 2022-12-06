function tournamentOfChristmas(input){

    let index = 0;
    let days = input[index++]
    let command = input[index++];
    
    let winPriceAllDays = 0;;
    let winDays= 0;
    let lostDays = 0; 

    for(let n = 1; n <= days; n++){
        let winPrice = 0;
        let win = 0;
        let lost = 0;
        while(command !== "Finish"){
            let sport = command;
            switch(sport){
                case "win": win++; winPrice += 20; break;
                case "lose": lost++; break;
                
            }
            command = input[index++]
        }
        if(win > lost){
            winPriceAllDays += winPrice + (winPrice * 0.10)
            winDays++;
        } else {
            winPriceAllDays += Number(winPrice);
            lostDays++;
        }
        command = input[index++]
    }
    if(winDays > lostDays){
        winPriceAllDays = winPriceAllDays + (winPriceAllDays * 0.20);
        console.log(`You won the tournament! Total raised money: ${(winPriceAllDays).toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${(winPriceAllDays).toFixed(2)}`)
    }
}

tournamentOfChristmas(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])

