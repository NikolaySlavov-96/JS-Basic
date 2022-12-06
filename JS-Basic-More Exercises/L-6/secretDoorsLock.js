function secretDoorsLock(input){

    let hundreds = input[0];
    let teens = input[1];
    let firsts = input[2];

    for(let n = 1; n <= hundreds; n++){
        for(let a = 2; a <= teens; a++){
            for(let g = 1; g <= firsts; g++){
                if(n % 2 === 0 && (a % 2 !== 0 || a / 2 === 1) && a !== 9 && g % 2 === 0){
                    console.log(`${n} ${a} ${g}`)
                }
            }
        }
    }
}

secretDoorsLock(['3' , '5' , '5'])