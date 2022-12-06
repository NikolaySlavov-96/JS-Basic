function squareFrame(input){

    let number = Number(input[0]);
    let numberRow = 0;
    let numberColum = 0;

    for(let n = 1; n <= number; n++){
        numberRow++;
        let sumFin = "";
        for(let q = 1; q <= number; q++){
            numberColum++;
            if(numberRow === 1 || numberRow === number){
                 if(numberColum === 1){
                    sumFin += ("+ ")
                } else if(numberColum === number){
                    sumFin += ("+")
                } else if(numberColum !== 1 && numberColum !== number) {
                    sumFin += ("- ")
                }
            } else {
                if(numberRow !== 1 && numberColum === 1){
                    sumFin += ("| ")
                } else if(numberColum === number){
                    sumFin += ("|")
                } else {
                    sumFin += ("- ")
                }
            }
        }
        console.log(sumFin)
        numberColum = 0;
    }
}

squareFrame(['4'])