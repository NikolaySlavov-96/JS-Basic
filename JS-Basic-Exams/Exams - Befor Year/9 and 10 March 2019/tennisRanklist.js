function tennisRanklist(input){

    let index = 0;
    let allGames = input[index++];
    let beginningScore = Number(input[index++]);
    let command = input[index++];

    let collectScore = 0; 
    let winTour = 0;

    for(let n = 1; n <= allGames; n++){
        switch(command){
            case "W": collectScore += 2000; winTour++; break;
            case "F": collectScore += 1200; break;
            case "SF": collectScore += 720; break;
        }
        command = input[index++]
    }
    console.log(`Final points: ${(beginningScore + collectScore)}`)
    console.log(`Average points: ${Math.floor(collectScore / allGames)}`)
    console.log(`${((winTour / allGames) * 100).toFixed(2)}%`)
}


tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
