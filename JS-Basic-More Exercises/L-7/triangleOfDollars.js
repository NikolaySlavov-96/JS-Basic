function triangleOfDollars(input){
    
    let triangle = input[0];

    let funDollars = "";
    for(let n = 1; n <= triangle; n++){
        
        funDollars += (`${"$"} `);
        console.log(funDollars)
    }
    
}

triangleOfDollars(['2'])