function diamond(input){

    let qualityRowAndColum = Number(input[0]);
    
    let columBegin = 0;
    let columEnd = 1;
    let endColumBegin = ((qualityRowAndColum / 2) - 1);
    let endColumEnd = (qualityRowAndColum / 2);

    for(let n = 1; n <= qualityRowAndColum; n++){
        let print = "";
        for(let q = 1; q <= qualityRowAndColum; q++){
            if(n === 1){
                if(q <= ((qualityRowAndColum - 1) / 2) || q > ((qualityRowAndColum + 2) / 2)){
                    print += "-";
                } else {
                    print += "*";
                }
            } else if(n !== 1 && n <= (Math.ceil(qualityRowAndColum / 2))){
                if(q === (Math.ceil(qualityRowAndColum / 2) - columBegin) || q === (Math.floor(qualityRowAndColum / 2) + columEnd)){
                    print += "*";
                } else {
                    print += "-";
                }
            } else {
                if(q === ((qualityRowAndColum / 2) - endColumBegin) || q === ((qualityRowAndColum / 2) + endColumEnd)){
                    print += "*";
                } else {
                    print += "-";
                }
            }
        }
        columBegin++;
        columEnd++;
        if(n >= (qualityRowAndColum / 2)){
            endColumBegin--;
            endColumEnd--;
        }
        console.log(print)
        if(n === (qualityRowAndColum - 1) && (qualityRowAndColum % 2) === 0){
            break;
        }

    }
}

diamond(["8"])