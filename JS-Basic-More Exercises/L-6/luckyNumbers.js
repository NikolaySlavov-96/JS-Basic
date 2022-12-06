function luckyNumbers(input){

    let numberFantastic = Number(input[0]);
    let funNumber = "";

    for(let n = 1; n <= 9; n++){
        for(let m = 1; m <= 9; m++){
            for(let g = 1; g <= 9; g++){
                for(let t = 1; t <= 9; t++){
                    if(n + m === g + t){
                        if(numberFantastic % (n + m) === 0)
                            funNumber += (`${n}${m}${g}${t} `)
                    }
                }
            }
        }
    }
    console.log(funNumber)
}

luckyNumbers(["3"])