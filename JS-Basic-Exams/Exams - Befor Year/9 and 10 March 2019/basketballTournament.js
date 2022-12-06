function basketballTournament(input){
    
    let index = 0;
    let nameTournament = input[index++];
    let qualityTournament = input[index++];

    let isFlag = false;
    let allPlayGame = 0;
    let win = 0;
    let lost = 0;

    while(nameTournament !== "End of tournaments"){
        let counter = 0;
        for(let n = 1; n <= qualityTournament; n++){
            allPlayGame++;
            counter++;
            let teamDessy = Number(input[index++]);
            let teamOpponent = Number(input[index++]);
            if(teamDessy > teamOpponent){
                win++;
                console.log(`Game ${counter} of tournament ${nameTournament}: win with ${teamDessy - teamOpponent} points.`)
            } else if(teamDessy < teamOpponent){
                lost++;
                console.log(`Game ${counter} of tournament ${nameTournament}: lost with ${teamOpponent - teamDessy} points.`)
            }
        }
        nameTournament = input[index++]
        if(nameTournament === "End of tournaments"){
            isFlag = true;
        }
        qualityTournament = input[index++];
    }
    if(isFlag === true){
        console.log(`${((win / allPlayGame) * 100).toFixed(2)}% matches win`)
        console.log(`${((lost / allPlayGame) * 100).toFixed(2)}% matches lost`)
    }
}

basketballTournament(["Dunkers",
"2",
"75",
"65",
"56",
"73",
"Fire Girls",
"3",
"67",
"34",
"83",
"98",
"66",
"45",
"End of tournaments"])
