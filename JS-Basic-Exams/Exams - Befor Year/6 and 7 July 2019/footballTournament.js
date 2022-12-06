function footballTournament(input){

    let index = 0;
    let nameTeam = input[index++];
    let counterGames = Number(input[index++]);
    let resultGames = input[index++];

    let isCorrectFlag = false;

    let win = 0;
    let equality = 0;
    let lost = 0;

    let allScore = 0;

    if(counterGames < 1){
        console.log(`${nameTeam} hasn't played any games during this season.`);
        isCorrectFlag = true;
    } else {
        for(let n = 1; n <= counterGames; n++){
            switch(resultGames){
                case "W": win++; allScore += 3; break;
                case "D": equality++; allScore +=1; break;
                case "L": lost++; break;
            }
            resultGames = input[index++];
        }
    }
    if(isCorrectFlag === false){
        console.log(`${nameTeam} has won ${allScore} points during this season.`)
        console.log(`Total stats:`)
        console.log(`## W: ${win}`)
        console.log(`## D: ${equality}`)
        console.log(`## L: ${lost}`)
        console.log(`Win rate: ${((win / counterGames) * 100).toFixed(2)}%`)
    }
}

footballTournament(["Liverpool",
"10",
"W",
"D",
"D",
"W",
"L",
"W",
"D",
"D",
"W",
"W"])
