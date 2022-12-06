function traveling(input){

    let index = 0;
    let command = input[index++]; //0
    let isCorrect = false;

    while(command !== "End"){
        let destiny = command;
        command = input[index++]
        let priceTravel = command;
        let sumTripsMoney = 0;
            while(priceTravel >= sumTripsMoney){
                let money = priceTravel;
                money = input[index++];
                sumTripsMoney += Number(money);
                   if(money === "End"){
                      isCorrect = true;
                       break;
                    }
            }
            
        if(priceTravel <= sumTripsMoney){
            console.log(`Going to ${destiny}!`)
        } else if(sumTripsMoney !== 0){
           //command = input[index--]
           isCorrect = true;
        }
        if(isCorrect !== false){
            break;
        }
        command = input[index++]
    }
}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500"])