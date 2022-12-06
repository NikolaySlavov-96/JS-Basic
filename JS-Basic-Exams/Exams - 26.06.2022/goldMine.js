function goldMine(input){

    let index = 0
    let qualityLocation = Number(input[index++]);
    let avgExtraction = Number(input[index++]);
    let dayExtraction = Number(input[index++]);

    for(let i = 0; i < qualityLocation; i++){
        let sumExtraction = 0;
        let days = dayExtraction
        for(let j = 0; j < dayExtraction; j++){
            let dayPerDayExtraction = dayExtraction;
            dayPerDayExtraction = Number(input[index++]);
            sumExtraction += Number(dayPerDayExtraction);
        }
        sumExtraction /= days
        if(sumExtraction >= avgExtraction){
            console.log(`Good job! Average gold per day: ${(sumExtraction).toFixed(2)}.`)
        } else {
            console.log(`You need ${(avgExtraction - sumExtraction).toFixed(2)} gold.`)
        }
        avgExtraction = input[index++]
        dayExtraction = input[index++]
    }
}

goldMine(["2",//0
"10",//1
"3",//2 
"10",
"10",
"11",
"20",
"2",
"20",
"10"])
