function journey(input){

    let budgets = Number(input[0]);
    let seasone = input[1];

    if(budgets >= 0 && budgets <= 100){
        console.log("Somewhere in Bulgaria")
        if(seasone === "summer"){
            console.log(`Camp - ${(budgets * 0.30).toFixed(2)}`)
        } else if(seasone === "winter"){
            console.log(`Hotel - ${(budgets * 0.70).toFixed(2)}`)
        }
    } else if(budgets <= 1000){
        console.log("Somewhere in Balkans")
        if(seasone === "summer"){
            console.log(`Camp - ${(budgets * 0.40).toFixed(2)}`)
        }else if(seasone === "winter"){
            console.log(`Hotel - ${(budgets * 0.80).toFixed(2)}`)
        }
    } else if(budgets > 1000){
        console.log("Somewhere in Europe")
        console.log(`Hotel - ${(budgets * 0.90).toFixed(2)}`)
    }
}

journey(["50", "summer"]);