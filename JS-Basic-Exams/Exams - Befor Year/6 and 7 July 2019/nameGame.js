function nameGame(input){

    let index = 0;
    let nameGamers = input[index++];
    let commands = input[index++];

    let counterIns = 0;

    let firstGamers = "";
    let secondGamers = "";

    let scoreFirst = 0;
    let scoreSecond = 0; 

    
    while(nameGamers !== "Stop"){
        counterIns++;

        if(counterIns % 2 !== 0){
            firstGamers = nameGamers;
        } else {
            secondGamers = nameGamers;
            commands = input[index++]
        }

        for(let n = 0; n < nameGamers.length; n++){
            let result = nameGamers.charCodeAt(n)
            
            if(result == commands){
                if(counterIns % 2 !== 0){
                    scoreFirst += 10;
                } else {
                    scoreSecond +=10;
                }
            } else {
                if(counterIns % 2 !== 0){
                    scoreFirst += 2;
                } else {
                    scoreSecond += 2;
                }
            }
            commands = input[index++];
        }
        nameGamers = commands;
    }
    if(scoreFirst > scoreSecond){
        console.log(`The winner is ${firstGamers} with ${scoreFirst} points!`)
    } else if(scoreFirst <= scoreSecond) {
        console.log(`The winner is ${secondGamers} with ${scoreSecond} points!`)
    }
}

nameGame(["Nikolay",
"124",
"34",
"111",
"97",
"99",
"Gosho",
"98",
"124",
"88",
"76",
"18",
"Stop"])


