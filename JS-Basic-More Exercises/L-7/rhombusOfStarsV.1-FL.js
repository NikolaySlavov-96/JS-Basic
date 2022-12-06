function rhombusOfStars(input){

    let romp = Number(input[0]);
    
    let fumSum = "";
    let rows = 0;
    let colum = 0;

    for(let v = 1; v <= romp; v++){
        rows++;
            if(rows === 1){
                for(let q = 1; q <= (romp - (romp - rows)); q++){
                    fumSum += (`${"    "}${"*"}`)
                    break;
                }
            } else if(rows === 2){
                for(let q = 1; q <= (romp - (romp - rows)); q++){
                    fumSum += (`${"   "}${"* *"}`)
                    break;
                }
            } else if(rows === 3){
                for(let q = 1; q <= (romp - (romp - rows)); q++){
                    fumSum += (`${"  "}${"* * *"}`)
                    break;
                }
            } else if(rows === 4){
                for(let q = 1; q <= (romp - (romp - rows)); q++){
                    fumSum += (`${" "}${"* * * *"}`)
                    break;
                }
            } else if(rows === 5){
                for(let q = 1; q <= romp - (romp - rows); q++){
                    fumSum += (`${""}${"* "}`)
                }
            }
        console.log(fumSum)
        fumSum = "";
    }
}

rhombusOfStars(['5'])

//-\n