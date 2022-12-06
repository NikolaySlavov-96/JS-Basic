function squareOfStars(input){

    let inputSum = Number(input[0]);

    for(let n = 1; n <= inputSum; n++){
        let square = "";
        for(let g = 1; g <= inputSum; g++){
            square += (`${"*"} `)
        }
        console.log(square)
    }
}

squareOfStars(['2'])