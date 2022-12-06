function reportSystem(input){

    let index = 0;
    let collectSum = Number(input[index++]);
    let command = input[index++];

    let allSumCollect = 0;
    let averageCS = 0;
    let averageCC = 0;
    let isCorrect = false;
    let qualityTransaction = 0;

    let qualituCSTr = 0;
    let qualituCCTr = 0;

    while(command !== "End"){
        qualityTransaction++;
        let priceTransaction = command;
        
        if(qualityTransaction % 2 === 0) {
            if(priceTransaction < 10){
                console.log(`Error in transaction!`)
            } else {
                console.log(`Product sold!`)
                averageCC += Number(priceTransaction);
                qualituCCTr++;
                allSumCollect += Number(priceTransaction);
            }
        } else {
            if(priceTransaction > 100){
                console.log(`Error in transaction!`)
            } else {
                console.log(`Product sold!`)
                averageCS += Number(priceTransaction);
                qualituCSTr++;
                allSumCollect += Number(priceTransaction);
            }
        }
        if(collectSum <= allSumCollect){
            console.log(`Average CS: ${(averageCS / qualituCSTr).toFixed(2)}`)
            console.log(`Average CC: ${(averageCC / qualituCCTr).toFixed(2)}`)
            isCorrect = true;
            break;
        }
        command = input[index++];
    }
    if(isCorrect === false){
        console.log(`Failed to collect required money for charity.`)
    }
}

reportSystem(["500","20","8","63","256","78","317"])

//(["500","120","8","63","256","78","317"])
//(["600","86","150","98","227","End"])