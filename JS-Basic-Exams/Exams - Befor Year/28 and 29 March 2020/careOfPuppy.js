function careOfPuppy(input){

    let index = 0;
    let allFoodKg = input[index++];
    let command = input[index++];

    let allFoodGr = allFoodKg * 1000;
    let eatOneDay = 0;

    while(command !== "Adopted"){
        let eatFoodOneMore = Number(command)

        eatOneDay += eatFoodOneMore
        
        command = input[index++]
    }
    if(allFoodGr >= eatOneDay){
        console.log(`Food is enough! Leftovers: ${allFoodGr - eatOneDay} grams.`)
    } else {
        console.log(`Food is not enough. You need ${eatOneDay - allFoodGr} grams more.`)
    }
}

careOfPuppy(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])



