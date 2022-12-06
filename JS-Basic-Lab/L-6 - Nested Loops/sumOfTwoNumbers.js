function sumOfTwoNumbers(input){
    
    let beginN = Number(input[0]);
    let ednN = Number(input[1]);
    let magicN = Number(input[2]);

    let serch = 0;
    let resultMagic = 0;
    let isFound = false;

    for(let i = beginN; i <= ednN; i++){
        for(let k = beginN; k <= ednN; k++){
            serch++;
            if(i + k === magicN){
                console.log(`Combination N:${serch} (${i} + ${k} = ${i + k})`)
                isFound = true;
                break;
            }
        }
        if(isFound === true){
            break;
        }
    }
    if(isFound === false){
        console.log(`${serch} combinations - neither equals ${magicN}`)
    }
}

sumOfTwoNumbers(["88",
"888",
"2000"])


