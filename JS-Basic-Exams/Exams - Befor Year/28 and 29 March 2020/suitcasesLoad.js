function suitcasesLoad(input){

    let index = 0;
    let fullSpace = input[index++];
    let command = input[index++];
    
    let sumNumber = 0;
    let sumSuitcase = 0;

    let uploadSuitcase = 0;
    let finalCommand = "";

    let but = 0;
    let flag = false;

    while(command !== "End"){
        but++;
        let sizeCase = Number(command);
        if((sizeCase > fullSpace) || (sumSuitcase >= fullSpace) || (sumSuitcase + sizeCase) >= fullSpace){
            finalCommand = (`No more space!`)
            break;
        }
        
        if(sizeCase <= fullSpace){
            if(sumNumber === 3){
                uploadSuitcase++;
                sumSuitcase += (sizeCase + (sizeCase * 0.10))
                sumNumber = 0;
                
            } else {
                uploadSuitcase++
                sumSuitcase += sizeCase;
                sumNumber++;
            }
        }
        if(but > 10){
            if(but >= uploadSuitcase){
                flag = true;
                break;
            }
        }
        command = input[index++];
    }
    if(command === "End" || flag === true){
        console.log(`Congratulations! All suitcases are loaded!`)
    } else {
        console.log(`${finalCommand}`)
    }
    console.log(`Statistic: ${uploadSuitcase} suitcases loaded.`)
}

suitcasesLoad(["700.5",
"180",
"340.6",
"126",
"220"])
