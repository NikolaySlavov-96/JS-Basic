function mountainRun(input){

    let recordSecond = Number(input[0]);
    let rangeRecord = Number(input[1]);
    let timeSecond = Number(input[2]);

    let sumSecondAll = rangeRecord * timeSecond;
    let slowly = Math.floor(rangeRecord / 50) * 30;

    let allTimeToNewRecord = sumSecondAll + slowly;

    if(allTimeToNewRecord < recordSecond){
        console.log(`Yes! The new record is ${((allTimeToNewRecord).toFixed(2))} seconds.`)
    } else {
        console.log(`No! He was ${((allTimeToNewRecord - recordSecond).toFixed(2))} seconds slower.`)
    }
}

mountainRun(["1377",
"389",
"3"])
