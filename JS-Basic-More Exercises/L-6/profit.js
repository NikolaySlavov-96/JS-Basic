function profit(input){

    let bankOne = Number(input[0]);
    let bankTwo = Number(input[1]);
    let bankThree = Number(input[2]);
    let finallyPrice = Number(input[3]);

    for(let n = 0; n <= bankOne; n++){
        for(let m = 0; m <= bankTwo; m++){
            for(let q = 0; q <= bankThree; q++){
                if(((n * 1) + (m * 2) + (q * 5)) === finallyPrice){
                    console.log(`${n} * 1 lv. + ${m} * 2 lv. + ${q} * 5 lv. = ${(n * 1) + (m * 2) + (q * 5)} lv.`)
                }
            }
        }
    }
}

profit(['3' , '2' , '3' , '10'])