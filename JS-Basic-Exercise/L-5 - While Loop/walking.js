function walking(input){

    let index = 0;
    let command = input[index];
    index++;
    let targets = 0;

    while(command !== "Going home"){
        steps = Number(command);

        targets += Number(steps)
        command = input[index];
        index++;
        if(targets >= 10000){
            break;
        }
    }

    if(command === "Going home"){
        command = input[index];
        index++
        targets += Number(command)
        
    } else {
        command = input[index];
        index++
    }

    if(targets >= 10000){
        console.log("Goal reached! Good job!")
        console.log(`${targets - 10000} steps over the goal!`)
    } else {
        console.log(`${10000 - targets} more steps to reach goal.`)
    }
}

walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])


