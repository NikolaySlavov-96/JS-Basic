function primePairs(input){

    let firstTwo = Number(input[0]);
    let secondTwo = Number(input[1]);
    let finalNumberFirst = Number(input[2]);
    let finalNumberSecond = Number(input[3]);
    
    let finisNumberFirst = firstTwo + finalNumberFirst
    let finishNumberSecond = secondTwo + finalNumberSecond
    let finalSum = "";
    let finalSumN = "";
    let finalSumM = "";

    for(let n = firstTwo; n <= finisNumberFirst; n++){
        for(let m = secondTwo; m <= finishNumberSecond; m++){
            if((n / 2 === 1 || n % 2 !== 0) && (m / 2 === 1 || m % 2 !== 0)){
                finalSumN += n
                finalSumM += m
                finalSum += (`${finalSumN}${finalSumM} `)
                finalSumM = "";
                finalSumN = "";
            }
        }
        
    }
    
    console.log(`${finalSum}`)
}

primePairs(['10' , '30' , '9' , '6'])