function carNumber(input){

    let firstNumber = Number(input[0]);
    let finalNumber = Number(input[1]);

    let specialNumber = "";

    for(let n = firstNumber; n <= finalNumber; n++){
        for(let k = firstNumber; k <= finalNumber; k++){
            for(let y = firstNumber; y <= finalNumber; y++){
                for(let u = firstNumber; u <= finalNumber; u++){
                    if((n % 2 === 0 && u % 2 !== 0) || (n % 2 !== 0 && u % 2 === 0)){
                        if(n > u){
                            if((k + y) % 2 === 0){
                                specialNumber += (`${n}${k}${y}${u} `)
                            }
                        }
                    }
                }
            }
        }
    }  
    console.log(specialNumber)     
}

carNumber(["2" , "3"])