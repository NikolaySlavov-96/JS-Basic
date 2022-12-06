function sunglasses(input){

    let condition = Number(input[0]);

    let borderCondition = (condition * 5)
    
    for(let n = 1; n <= condition; n++) {
        let print = "";
        for(let g = 1; g <= borderCondition; g++) {
            if(n === 1 || n === condition){
                if(g <= (condition * 2) || g > ((condition * 2) + condition)) {
                    print += "*"
                } else if(g > ((condition * 2) + 1) || g < ((condition * 2) + 4)) {
                    print += " "
                }
            } else if(n !== 1 && n !== condition) {
                if(g === 1 || g === (condition * 2) || g === ((condition * 2) + (condition + 1)) || g === borderCondition) {
                    print += "*"
                } else if((g > 1 && g <= (condition * 2)) || (g > ((condition *2) + condition + 1) && g < borderCondition)) {
                    print += "/"
                } else if(g > (condition * 2) && g < ((condition * 2) + condition + 1) && ((condition / 2) === n || (condition / 2 + 0.5) === n)) {
                    print += "|"
                } else if(g > (condition * 2) && g < ((condition * 2) + condition + 1)) {
                    print += " "
                }
            }
        }
        console.log(print)
    }
}

sunglasses(["3"])