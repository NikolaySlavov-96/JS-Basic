function theSongOfTheWheels(input){

    let controlNumber = Number(input[0]);

    let finalNumber = "";
    let isQuality = Number(0);
    let passwordPrint = "";
    let isBullef = false;

    for(let a = 1; a <= 9; a++){
        for(let b = 1; b <= 9; b++){
            for(let c = 1; c <= 9; c++){
                for(let d = 1; d <= 9; d++){
                    if(a < b && c > d){
                        if(((a * b) + (c * d)) === controlNumber){
                            isQuality++;
                            finalNumber += (`${a}${b}${c}${d} `)
                            if(isQuality === 4){
                                passwordPrint = (`${a}${b}${c}${d}`)
                                isBullef = true;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(finalNumber)
    if(isBullef !== true){
        console.log('No!')
    } else {
        console.log(`Password: ${passwordPrint}`)
    }
}

theSongOfTheWheels(['11'])