function oscars(input){

    let index = 0;
    let nameActor = input[index++];
    let pointFromAcademy = Number(input[index++]);
    let qualityAppraisers = Number(input[index++]);

    let nameAppraiser = input[index++];
    let pointsAppraiser =input[index++];

    let qualityOperation = 0;
    let givePoint = 0;

    let ifFlag = false;

    while(qualityOperation !== qualityAppraisers){
        qualityOperation++;
        let sizeNameAppraiser = 0;
        for(n = 1; n <= nameAppraiser.length; n++){
            sizeNameAppraiser++;
        }
        givePoint += ((sizeNameAppraiser * pointsAppraiser) / 2)

        if((pointFromAcademy + givePoint) >= 1250.5){
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${(givePoint + pointFromAcademy).toFixed(1)}!`)
            ifFlag = true;
            break;
        }
        nameAppraiser = input[index++];
        pointsAppraiser = Number(input[index++]);
    }
    if(ifFlag === false){
        console.log(`Sorry, ${nameActor} you need ${(1250.5 - (givePoint + pointFromAcademy)).toFixed(1)} more!`)
    }
}

oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])




