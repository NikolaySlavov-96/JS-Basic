function sunglasses(input){

    let condition = Number(input[0]);

    let borderCondition = (condition * 5)
    
    for(let n = 1; n <= condition; n++){
        let print = "";
        if(n === 1 || n === condition){
            for(let g = 0; g < (condition * 2); g++){
                print += "*"
            }
            for(let q = 1; q <= condition; q++){
                print += " "
            }
            for(let r = 1; r <= (condition * 2); r++){
                print += "*"
            }
        } else if(n !== 0 && n !== condition){
            for(let t = 1; t <= borderCondition; t++){
                if(t === 1 || t === (condition * 2) || t === (condition * 2 + (condition  + 1)) || t === borderCondition){
                    print += "*"
                } else if(t !== 1 || t !== (condition * 2) || t !== (condition * 2 + (condition  + 1)) || t !== borderCondition) {
                    print += "/"
                } else {
                    print += " "
                }
            }
        }
        console.log(print)
    }
}

sunglasses(["4"])