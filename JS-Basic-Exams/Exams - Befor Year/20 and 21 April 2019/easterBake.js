function easterBake(input){

    let index = 0;
    let qualityBake = Number(input[index++]);
    let qualitySugar = Number(input[index++]);
    let qualityFlour = Number(input[index++]);

    let sumSugar = 0;
    let sumFlour = 0;

    let maxUsingSugar = Number.MIN_SAFE_INTEGER;
    let maxUsingFlour = Number.MIN_SAFE_INTEGER;
    
    for(let n = 1; n <= qualityBake; n++){
        sumSugar += qualitySugar;
        sumFlour += qualityFlour;
        if(qualitySugar > maxUsingSugar){
            maxUsingSugar = qualitySugar;
        }
        if(qualityFlour > maxUsingFlour){
            maxUsingFlour = qualityFlour;
        }
        qualitySugar = Number(input[index++]);
        qualityFlour = Number(input[index++]);
    }

    console.log(`Sugar: ${(Math.ceil(sumSugar / 950))}`)
    console.log(`Flour: ${(Math.ceil(sumFlour / 750))}`)
    console.log(`Max used flour is ${maxUsingFlour} grams, max used sugar is ${maxUsingSugar} grams.`)
}

easterBake(["3",
"400",
"350",
"250",
"300",
"450",
"380"])
