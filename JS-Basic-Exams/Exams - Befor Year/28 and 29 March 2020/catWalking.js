function catWalking(input){

    let timeToExerciseToday = Number(input[0]);
    let qualityExerciseToday = Number(input[1]);
    let acceptedKK = Number(input[2]);

    let sumAllDayExercise = (timeToExerciseToday * qualityExerciseToday) * 5;
    if(sumAllDayExercise >= (acceptedKK / 2)){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${sumAllDayExercise}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${sumAllDayExercise}.`)
    }
}

catWalking(["15",
"2",
"500"])
