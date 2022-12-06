function safePasswordsGenerator(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxQualityPassword = Number(input[2]);

    let combination = 0;
    let combinationPrint = "";

    let isFlag = false;
    let sumNewA = 35;
    let nextSumNewA = 35;
    let sumNewB = 64;
    let nextSumNewB = 64;

    let x = 1
    let y = 1;

    for (x; x <= a; x++) {
        let symbolA = "";
        let symbolB = "";
        for (y; y <= b; y++) {
            for (let A = sumNewA; A <= nextSumNewA; A++) {
                symbolA = A;
            }
            for (let B = sumNewB; B <= nextSumNewB; B++) {
                symbolB = B;
            }
            sumNewA++;
            nextSumNewA++;
            sumNewB++;
            nextSumNewB++;
            let symbolCodeA = String.fromCharCode(symbolA);
            let symbolCodeB = String.fromCharCode(symbolB);
            combinationPrint += (`${symbolCodeA}${symbolCodeB}${x}${y}${symbolCodeB}${symbolCodeA}|`)
            combination++;
            if(sumNewA > 55 && nextSumNewA > 55){
                sumNewA = 35;
                nextSumNewA = 35;
            }
            if(sumNewB >= 95 && nextSumNewB >= 97){
                sumNewB = 64;
                nextSumNewB = 64;
            }
            if(combination === maxQualityPassword){
                isFlag = true;
                break;
            }
        }
        if(y >= b){
            y = 1;
        }
        if(isFlag === true){
            break;
        }
    }
    console.log(combinationPrint)
}

safePasswordsGenerator(["100", "500", "1000"])