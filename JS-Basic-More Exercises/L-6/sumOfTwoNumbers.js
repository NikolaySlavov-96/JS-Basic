function sumOfTwoNumbers(input){

    let beginNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let isFlag = false;
    let numberSum = 0;

    for(let n = beginNumber; n <= endNumber; n++){
        for(let m = beginNumber; m <= endNumber; m++){
            numberSum++
            if(n + m === magicNumber){
                console.log(`Combination N:${numberSum} (${n} + ${m} = ${n + m})`)
                isFlag = true;
                break;
            }
             
        }
        if(isFlag !== false){
            break;
        }
    }
    if(isFlag !== true){
        console.log(`${numberSum} combinations - neither equals ${magicNumber}`)
    }
}

sumOfTwoNumbers(['1' , '10' , '5'])