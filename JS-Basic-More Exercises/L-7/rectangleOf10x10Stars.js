function rectangleOf10x10Stars(){

    let test = "";

    for(let n = 1; n <= 10; n++){
        for(let h = 1; h <= 10; h++){
            test += (`${"*"}`)
        }
        console.log(test)
        test = ""
    }
    
}

rectangleOf10x10Stars()