function easterCompetition(input){

    let index = 0;
    let qualityBake = Number(input[index++]);
    let nameBakery = input[index++];
    let command = input[index++];

    let nameTemporaryName = "";
    let maxPoint = 0;
    
    for(let n = 1; n <= qualityBake; n++){
        let points = 0;
        while(command !== "Stop"){
            points += Number(command);
            command = input[index++];
        }
        if(command === "Stop"){
            console.log(`${nameBakery} has ${points} points.`)
            if(maxPoint < points){
                maxPoint = points;
                nameTemporaryName = nameBakery;
                console.log(`${nameBakery} is the new number 1!`)
            }
        }
        nameBakery = input[index++];
        command = input[index++];
    }
    console.log(`${nameTemporaryName} won competition with ${maxPoint} points!`)
}

easterCompetition(["3",
"Chef Manchev", "10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"])
