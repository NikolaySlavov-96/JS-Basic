function cleverLily(input){

    let birghday = Number(input[0]);
    let priceWashmachine = Number(input[1]);
    let priceSingleToys = Number(input[2]);
    let sum = 0;
    let toys = 0;
    let stolenMoney = 0;
    let addMoney = 10;

    for(let i = 1; i <= birghday; i++){
        
        if(i % 2 === 0){
            sum = sum + addMoney;
            addMoney = addMoney + 10;
            stolenMoney++

        } else {
            toys++
        }
    }
    let sumSellToys = toys * priceSingleToys;
    let priceToWash = (sum + sumSellToys) - stolenMoney;

    if(priceToWash >= priceWashmachine){
        console.log(`Yes! ${(priceToWash - priceWashmachine).toFixed(2)}`)
    } else {
        console.log(`No! ${(priceWashmachine - priceToWash).toFixed(2)}`)
    }
}

cleverLily(["10","170.00","6"]);