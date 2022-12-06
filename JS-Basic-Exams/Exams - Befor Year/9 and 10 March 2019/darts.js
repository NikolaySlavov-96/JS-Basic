function darts(input){

    let index = 0;
    let namePlayer = input[index++];
    let command = input[index++];
    let scorePoint = Number(input[index++]);

    let beginPoints = 301;

    let goodShot = 0;
    let badShot = 0;
    
    let isFlags = false;
    
    while(command !=="Retire"){
        let sectorPoint = command;
        let PointPresPlay = 0;
        
        switch(sectorPoint){
            case "Single": PointPresPlay += scorePoint;
            break;
            case "Double": PointPresPlay += (scorePoint * 2)
            break;
            case "Triple": PointPresPlay += (scorePoint * 3)
            break;
        }
        
        if(beginPoints >= PointPresPlay) {
            goodShot++;
        } else if(beginPoints < PointPresPlay) {
            command = input[index++];
            scorePoint = Number(input[index++]);
            badShot++;
            continue;
        }
        
        beginPoints -= PointPresPlay;

        if(beginPoints <= 0){
            isFlags = true;
            break;
        }
        
        command = input[index++];
        scorePoint = Number(input[index++])
    }
    if(isFlags === true){
        console.log(`${namePlayer} won the leg with ${goodShot} shots.`)
    } else {
        console.log(`${namePlayer} retired after ${badShot} unsuccessful shots.`)
    }
}

darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"])




