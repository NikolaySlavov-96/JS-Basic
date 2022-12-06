function easterEggs(input){

    let index = 0;
    let qualityEggs = Number(input[index++]);
    let colorEggs = input[index++];

    let redEggs = 0;
    let orangeEggs = 0;
    let blueEggs = 0;
    let greenEggs = 0; 
    let maxEggs = Number.MIN_SAFE_INTEGER;
    let colorMax = "";

    for(let n = 1; n <= qualityEggs; n++){
        switch(colorEggs){
            case "red": redEggs++; break;
            case "orange": orangeEggs++; break;
            case "blue": blueEggs++; break;
            case "green": greenEggs++; break;
        }
        colorEggs = input[index++];
    }
    if(redEggs > maxEggs){
        maxEggs = redEggs
        colorEggs = "red";
    }
    if(orangeEggs > maxEggs){
        maxEggs = orangeEggs;
        colorEggs = "orange";
    }
    if(blueEggs > maxEggs){
        maxEggs = blueEggs;
        colorEggs = "blue";
    }
    if(greenEggs > maxEggs){
        maxEggs = greenEggs;
        colorEggs = "green";
    }
    
    console.log(`Red eggs: ${redEggs}`)
    console.log(`Orange eggs: ${orangeEggs}`)
    console.log(`Blue eggs: ${blueEggs}`)
    console.log(`Green eggs: ${greenEggs}`)
    console.log(`Max eggs: ${maxEggs} -> ${colorEggs}`)
}

easterEggs(["7",
"orange",
"blue",
"green",
"green",
"blue",
"red",
"green"])
