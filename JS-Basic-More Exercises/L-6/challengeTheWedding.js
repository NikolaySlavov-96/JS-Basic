function challengeTheWedding(input){

    let guestMen = input[0];
    let guestWoman = input[1];
    let tableQuest = input[2] - 1;
    
    let viewPrints = "";
    let tableQuality = 0;
    let isBullet = false;

    for(let n = 1; n <= tableQuest; n++){
        for(let men = 1; men <= guestMen; men++){
            for(let woman = 1; woman <= guestWoman; woman++){
                tableQuality++;
                viewPrints += (`(${men} <-> ${woman}) `)
                if(tableQuest < tableQuality){
                    isBullet = true;
                    break;
                }
            }
            if(isBullet !== false){
                break;
            }
        }
        if(isBullet !== false){
            break;
        }
        if((guestMen * guestWoman) >= tableQuality){
            break;
        }
    }
    console.log(viewPrints)
}

challengeTheWedding(['5' , '8' , '40'])