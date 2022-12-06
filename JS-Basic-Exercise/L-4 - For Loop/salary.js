function salary(input){
    
    let tasks = Number(input[0]);
    let money = Number(input[1]);
    let totalMoney = money;

    for(let index = 2; index <= input.length; index++){

        let currentTab = input[index];
        
        switch(currentTab){
            case "Facebook": money = money - 150; break;
            case "Instagram": money = money - 100; break;
            case "Reddit": money = money - 50; break;
        }
        if(money <= 0){
            console.log(`You have lost your salary.`)
            break;
        }
    }
    if(money > 0){
        console.log(`${money}`)
    }

}

salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])
