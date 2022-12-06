function house(input) {

    let condition = Number(input[0]);
    
    let begin = (condition / 2);
    let end = ((condition / 2) + 1);

    for(let n = 1; n <= condition; n++){
        let print = "";
        if(((condition + 1) / 2) >= n){ 
            // pokriv
            for(let q = 1; q <= condition; q++){
                if(n === 1){
                    if(q < (condition / 2) || q > ((condition / 2) + 1)) {
                        print += "-"
                    } else {
                        print += "*"
                    }
                } else if(n < (n + 1) && (n !== 1 && n !== (condition / 2))){
                    if(q < begin || q > end) {
                        print += "-"
                    } else {
                        print += "*"
                    }
                } else if(n === (condition / 2)){
                    print += "*"
                }
            }
            begin--;
            end++;
        } else {
            // osnovi
            for(let v = 1; v <= condition; v++){
                if(v === 1 || v === condition){
                    print += "|"
                } else {
                    print += "*"
                }
            }
        }
        console.log(print)
    }
}

house(["8"])