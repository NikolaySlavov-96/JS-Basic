function rectangleOfNxNStars(input){

    let sideN = input[0];

    for(let n = 1; n <= sideN; n++){
        let smartPrint = "";
        for(let m = 1; m <= sideN; m++){
            smartPrint += (`${"*"}`)
        }
        console.log(smartPrint)
    }
}

rectangleOfNxNStars(['2'])