function exam(input){

    let index = 0;
    let quality = input[index]
    index++;
    let command = input[index]

    let excelent = 0; 
    let betwen = 0;
    let secont = 0;
    let fail = 0;
    let sumAvg = 0;
    let price = Number(sumAvg);

    for(let index = 1; index <= quality; index++){
        command = input[index]
        if(command >= 2.00 && command <= 2.99){
            fail++;
            sumAvg += Number(command);
        } else if(command <= 3.99){
            secont++;
            sumAvg += Number(command);
        } else if(command <= 4.99){
            betwen++;
            sumAvg += Number(command);
        } else if(command >= 5.00){
            excelent++;
            sumAvg += Number(command);
        }
    }
    console.log(`Top students: ${(excelent / quality * 100).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${(betwen / quality * 100).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${(secont / quality * 100).toFixed(2)}%`)
    console.log(`Fail: ${(fail / quality * 100).toFixed(2)}%`)
    console.log(`Average: ${(sumAvg / quality).toFixed(2)}`)
}

exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])
