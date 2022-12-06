function easterEggsBattle(input){

    let index = 0;
    let firstPlayer = Number(input[index++]);
    let secondPlayer = Number(input[index++]);
    let command = input[index++];

    let firstPlayerWin = 0;
    let secondPlayerWin = 0;

    let isFirstBulev = false;
    let isSecondBulev = false;
    let isBulev = false;

    while(command !== "End"){
        if(command === "one"){
            firstPlayerWin++;
            secondPlayer--;
        } else if(command === "two"){
            secondPlayerWin++;
            firstPlayer--;
        }
        if(firstPlayer === 0 || secondPlayer === 0){
            break;
        }
        command = input[index++]
        if(command === "End"){
            isBulev = true;
        }
    }
    if(firstPlayer === 0){
        console.log(`Player one is out of eggs. Player two has ${secondPlayer} eggs left.`)
    } else if(secondPlayer === 0){
        console.log(`Player two is out of eggs. Player one has ${firstPlayer} eggs left.`)
    }

    if(isBulev !== false){
        console.log(`Player one has ${firstPlayer} eggs left.`)
        console.log(`Player two has ${secondPlayer} eggs left.`)
    }
}

easterEggsBattle(["6" , "3" , "one" , "two" , "two" , "one" , "one" , "End"])
//easterEggsBattle(["5" , "4" , "one" , "two" , "one" , "two" , "two" , "End"])