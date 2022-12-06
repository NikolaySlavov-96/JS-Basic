function excursionSale(input){
    
    let index = 0;
    let travelSea = input[index];
    index++;
    let travelMountain = input[index];
    index++;
    let command = input[index];

    let sea = travelSea;
    let mountain = travelMountain;
    let sumPrice = 0;
    let isCorrect = false;

    while(command !== "Stop"){
        let types = command[index];
        index++
        switch(command){
            case "sea":
                if(sea > 0){
                    sumPrice += 680;
                    sea--;
                }
            break;
            case "mountain":
                if(mountain > 0){
                    sumPrice += 499;
                    mountain--;
                }
            break;
        }
        if(sea === 0 && mountain === 0){
            isCorrect = true;
            break;
        }
        command = input[index];
    }
    if(isCorrect){
        console.log("Good job! Everything is sold.")
        console.log(`Profit: ${sumPrice} leva.`)
    } else {
        console.log(`Profit: ${sumPrice} leva.`)
    }  
}
excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])
