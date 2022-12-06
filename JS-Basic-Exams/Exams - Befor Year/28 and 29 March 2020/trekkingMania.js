function trekkingMania(input){

    let index = 0;
    let allGroup = Number(input[index++]);
    let groupScaling = Number(input[index++]);

    let sumGroup = 0;

    let firstRowMusala = 0;
    let secondRowMonblan = 0;
    let therdRowKilimandjaro = 0;
    let fortyRowK2 = 0;
    let fiftyRowEverest = 0;

    let allPeople = 0;

    while(allGroup !== sumGroup){
        allPeople += groupScaling;
        if(groupScaling <= 5){
            //Musala
            firstRowMusala += groupScaling;
        } else if(groupScaling <= 12){
            //Monblan\
            secondRowMonblan += groupScaling;
        } else if(groupScaling <= 25){
            //Kilimandgaro
            therdRowKilimandjaro += groupScaling;
        } else if(groupScaling <= 40){
            //K2
            fortyRowK2 += groupScaling;
        } else if(groupScaling >= 41){
            //Everest 
            fiftyRowEverest += groupScaling;
        }
        groupScaling = Number(input[index++]);
        sumGroup++;
    }

    console.log(`${((firstRowMusala / allPeople) * 100).toFixed(2)}%`)
    console.log(`${((secondRowMonblan / allPeople) * 100).toFixed(2)}%`)
    console.log(`${((therdRowKilimandjaro / allPeople) * 100).toFixed(2)}%`)
    console.log(`${((fortyRowK2 / allPeople) * 100).toFixed(2)}%`)
    console.log(`${((fiftyRowEverest / allPeople) * 100).toFixed(2)}%`)
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
