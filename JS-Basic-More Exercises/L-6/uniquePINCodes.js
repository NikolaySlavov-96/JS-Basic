function uniquePINCodes(input){

    let numberA = Number(input[0]);
    let numberB = Number(input[1]);
    let numberC = Number(input[2]);

    for(let n = 1; n <= numberA; n++){
        for(let j = 2; j <= numberB; j++){
            for(let k = 1; k <= numberC; k++){
                if(n % 2 === 0 && (j % 2 !== 0 || j / 2 === 1) && j !== 9 && k % 2 === 0){
                    console.log(`${n} ${j} ${k}`)
                }
                
            }
        }
    }
}

uniquePINCodes(["3" , "5" , "5"])