function house(input) {

    let condition = Number(input[0]);

    for(let n = 1; n <= condition; n++){
        let print = "";
        if(((condition + 1) / 2) >= n){ 
            // pokriv
            if(condition % 2 === 0){
                // even
                if(condition === 2){
                    print += "**";
                } else {
                    for(let r = 1; r <= condition; r++){
                        if((condition / 2 - 1) >= n){
                            if(r <= (condition % 3) || r >= ((condition % 3) + (condition / 2))){
                                print += "_";
                            } else if(r > (condition % 3) || r < ((condition % 3) + (condition / 2))) {
                                print += "*"
                            }
                        } else {
                            print += "*";
                        }
                    }
                }
            } else {
                // odd
            }
        } else {
            // osnovi
        }
        console.log(print)
    }
}

house(["6"])