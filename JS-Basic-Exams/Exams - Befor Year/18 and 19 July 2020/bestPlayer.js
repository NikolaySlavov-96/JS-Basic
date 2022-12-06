function bestPlayer(input){
    
    let index = 0;
    let command = input[index++];
    let scorePlayer = input[index++];

    let finalPlayer = "";
    let finalScore = 0;


    while(command !== "END"){
        let player = command
        command = input[index++];
        if(scorePlayer === finalScore){
            break;
        } else if(scorePlayer >= 3 && scorePlayer <= 9){
            if(finalScore < scorePlayer){
                finalPlayer = (player)
                finalScore = (scorePlayer)
            }
        } else if(scorePlayer >= 10){
            finalPlayer = (player)
                finalScore = (scorePlayer)
                break;
        } else {
            if(finalScore < scorePlayer){
                finalPlayer = player
                finalScore = scorePlayer
            }
        }
        scorePlayer = input[index++]
    }
    console.log(`${finalPlayer} is the best player!`)
    if(finalScore < 3){
        console.log(`He has scored ${finalScore} goals.`)
    } else {
        console.log(`He has scored ${finalScore} goals and made a hat-trick !!!`)
    }
    
}

bestPlayer(["Petrov",
"2",
"Drogba",
"11"])





