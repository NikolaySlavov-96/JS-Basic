function clockPart2(){
    
    for(let n = 0; n < 24; n++){
        for(let m = 0; m < 60; m++){
            for(let j = 0; j < 60; j++){
                console.log(`${n} : ${m} : ${j}`)
            }
        }
    }
}

clockPart2()