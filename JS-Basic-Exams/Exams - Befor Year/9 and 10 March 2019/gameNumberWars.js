function gameNumberWars(input){

    let index = 0;
    let nameFirstPlayer = input[index++];
    let nameSecondPlayer = input[index++];
    let command = input[index++];

    let sumPointFirstPlayer = 0;
    let sumPointSecondPlayer = 0;
    
    while(command !== "End of game"){

        let scoreFirstPlayer = Number(command);
        let scoreSecondPlayer = Number(input[index++]);

        if(scoreFirstPlayer > scoreSecondPlayer){
            sumPointFirstPlayer += scoreFirstPlayer - scoreSecondPlayer;
        } else if(scoreFirstPlayer < scoreSecondPlayer) {
            sumPointSecondPlayer += scoreSecondPlayer - scoreFirstPlayer;
        } else if(scoreFirstPlayer === scoreSecondPlayer){
            console.log(`Number wars!`)
            let scoreFirstPlayer = Number(command);
            let scoreSecondPlayer = Number(input[index++]);
            if(scoreFirstPlayer > scoreSecondPlayer){
                console.log(`${nameFirstPlayer} is winner with ${sumPointFirstPlayer} points`)
            } else if(scoreFirstPlayer < scoreSecondPlayer){
                console.log(`${nameSecondPlayer} is winner with ${sumPointSecondPlayer} points`)
            }
        }

        command = input[index++]
        if(command === "End of game"){
            console.log(`${nameFirstPlayer} has ${sumPointFirstPlayer} points`)
            console.log(`${nameSecondPlayer} has ${sumPointSecondPlayer} points`)
        }
    }
}

gameNumberWars(["Elena",
"Simeon",
"5",
"3",
"2",
"5",
"8",
"8"])