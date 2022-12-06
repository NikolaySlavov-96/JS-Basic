function vacation(input){

    let index = 0;
    let needMoney = Number(input[index]);
    index++;
    let incomeMoney = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let sum = input[index];
    index++;
    let days = 0;
    let spend = 0;
    isCorrect = false;

    while(incomeMoney < needMoney){
        days++;
        if(command === "save"){
            spend = 0;
            incomeMoney += Number(sum)
        }else if (command === "spend"){
            spend++;
            if(spend === 5){
                console.log(`You can't save the money.`)
                console.log(`${days}`)
                isCorrect = true;
                break;
            }
            incomeMoney -= Number(sum)
            if(incomeMoney < 0){
                incomeMoney = 0;
            }
        }
        command = input[index];
        index++;
        sum = input[index];
        index++;
    }
    if(needMoney <= incomeMoney){
        console.log(`You saved the money for ${days} days.`)
    }
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])





