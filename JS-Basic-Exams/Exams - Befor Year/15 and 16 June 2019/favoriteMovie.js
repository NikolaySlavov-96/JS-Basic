function favoriteMovie(input){
    
    let index = 0;
    let command = input[index++];

    let maxSumFilm = 0;

    let finalName = "";
    let finalScore = Number.MIN_SAFE_INTEGER;

    while(command !== "STOP"){
        maxSumFilm++;
        
        let sizeTT = 0;
        let sizeTitle = 0;
        for(let q = 0; q < command.length; q++){
            sizeTT++;
        }
        for(let n = 0; n < command.length; n++){
            let words = command[n];
            sizeTitle += command.charCodeAt(n);
            if(words.search(/[^A-Z]/)) {
                sizeTitle -= sizeTT
            } else if(words.search(/[^a-z]/)) {
                sizeTitle -= (sizeTT * 2);
            }
        }
        if(finalScore < sizeTitle){
            finalName = command;
            finalScore = sizeTitle;
        }

        if(maxSumFilm === 7){
            console.log(`The limit is reached.`)
            break;
        }
        command = input[index++]
    }
    console.log(`The best movie for you is ${finalName} with ${finalScore} ASCII sum.`)
}

favoriteMovie(["Wrong turn",
"The maze",
"Area 51",
"Night Club",
"Ice age",
"Harry Potter",
"Wizards"])



