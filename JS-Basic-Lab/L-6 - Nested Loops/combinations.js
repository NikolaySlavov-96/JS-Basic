function combinations(input){

    let number = Number(input[0]);
    
    let validCombination = 0;

    for(let i = 0; i <= number;i++){
        for(let k = 0; k <= number;k++){
            for(let j = 0; j <= number;j++){
                if(i + k + j === number){
                    validCombination++;
                }
            }
        }
    }
    console.log(validCombination)
}

combinations(["25"])