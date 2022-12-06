function highJump(input){
    
    let index = 0;
    let desireHigh = Number(input[index++]);

    let isFailed = false;
    let desireHighJump = desireHigh - 30;
    
    let allJump = 0;


    
    while(desireHighJump <= desireHigh){
        for(let n = 1; n <= 3; n++){
            allJump++
            isFailed = true;
            let highJump = Number(input[index++]);
            if(desireHighJump < highJump){
                isFailed = false;
                desireHighJump += 5;
                break;
            }
        }
        if(isFailed){
            break;
        }
    }
    if(isFailed){
        console.log(`Tihomir failed at ${desireHighJump}cm after ${allJump} jumps.`)
    } else {
        console.log(`Tihomir succeeded, he jumped over ${desireHigh}cm after ${allJump} jumps.`)
    }
}

highJump(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])




