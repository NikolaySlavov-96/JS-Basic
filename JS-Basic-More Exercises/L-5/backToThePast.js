function backToThePast(input){

    let beginMoney = Number(input[0]);
    let years = Number(input[1]);
    let addYears = 17;

    let spend = 0;

    for(let i = 1800; i <= years; i++){
        addYears += 1
        if(i % 2 === 0){
            spend += 12000
        } else {
            sellPrice0 = 12000 + (50 * addYears)
            spend += sellPrice0   
        }
    }

    if(beginMoney >= spend){
        console.log(`Yes! He will live a carefree life and will have ${(beginMoney - spend).toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${(spend - beginMoney).toFixed(2)} dollars to survive.`)
    }
}

backToThePast(["100000.15" , "1808"])