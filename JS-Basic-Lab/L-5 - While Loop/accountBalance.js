function accountBalance(input){
    let account = 0;

    let index = 0;
    let Money = input[index];
    index++;

    while(Money !== "NoMoreMoney"){
        let sumMoney = Number(Money)
        if(sumMoney < 0){
            console.log("Invalid operation!");
            break;
        }
        account += sumMoney;
        console.log(`Increase: ${sumMoney.toFixed(2)}`)
        Money = input[index];
        index++;
    }
    console.log("Total: " + account.toFixed(2));
}

accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
