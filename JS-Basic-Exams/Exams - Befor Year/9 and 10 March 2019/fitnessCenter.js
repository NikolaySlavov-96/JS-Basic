function fitnessCenter(input){

    let index = 0;
    let numberTraining = Number(input[index++]);
    let command = input[index++];

    let allVisitor = 0;
    let allTraining = 0;
    let allBuyProtein = 0;
    let trainingBack = 0;
    let trainingChest = 0;
    let trainingLegs = 0;
    let trainingAbs = 0;
    let buyProteinShake = 0;
    let buyProteinBad = 0;

    for(let n = 1; n <= numberTraining; n++){
        switch(command){
            case "Back": trainingBack++; allTraining++; allVisitor++; break;
            case "Chest": trainingChest++; allTraining++; allVisitor++; break;
            case "Legs": trainingLegs++; allTraining++; allVisitor++; break;
            case "Abs": trainingAbs++; allTraining++; allVisitor++; break;
            case "Protein shake": buyProteinShake++; allBuyProtein++; allVisitor++; break;
            case "Protein bar": buyProteinBad++; allBuyProtein++; allVisitor++; break;
        }
        command = input[index++]
    }
    console.log(`${trainingBack} - back`)
    console.log(`${trainingChest} - chest`)
    console.log(`${trainingLegs} - legs`)
    console.log(`${trainingAbs} - abs`)
    console.log(`${buyProteinShake} - protein shake`)
    console.log(`${buyProteinBad} - protein bar`)
    console.log(`${((allTraining / allVisitor) * 100).toFixed(2)}% - work out`)
    console.log(`${((allBuyProtein / allVisitor) * 100).toFixed(2)}% - protein`)
}

fitnessCenter(["10","Back","Chest","Legs","Abs","Protein shake","Protein bar","Protein shake","Protein bar","Legs","Abs"])