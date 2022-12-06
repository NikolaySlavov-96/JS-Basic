function worldSwimmingRecord(input){

    let record = Number(input[0]);
    let measureMetric = Number(input[1]);
    let timeSecunds = Number(input[2]);

    let swiming = measureMetric * timeSecunds;
    let slow = Math.floor(measureMetric / 15) * 12.5;
    let sumTime = swiming + slow

    if (record > sumTime){
        console.log(`Yes, he succeeded! The new world record is ${sumTime.toFixed(2)} seconds.`)
    } else { 
        console.log(`No, he failed! He was ${(sumTime - record).toFixed(2)} seconds slower.`)
    }
}

worldSwimmingRecord(["55555.67","3017","5.03"])

