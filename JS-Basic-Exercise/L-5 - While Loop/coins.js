function coins(input){

    let money = Number(input[0]);
    let changeMoney = Math.floor(money * 100);
    let sumMonet = 0;

    while(changeMoney > 0){
        if(changeMoney >= 200){
            sumMonet++;
            changeMoney -= 200;
        } else if(changeMoney >= 100){
            sumMonet++;
            changeMoney -= 100;
        } else if(changeMoney >= 50){
            sumMonet++;
            changeMoney -= 50;
        } else if(changeMoney >= 20){
            sumMonet++;
            changeMoney -= 20;
        } else if(changeMoney >= 10){
            sumMonet++;
            changeMoney -= 10;
        } else if(changeMoney >= 5){
            sumMonet++;
            changeMoney -= 5;
        } else if(changeMoney >= 2){
            sumMonet++;
            changeMoney -= 2;
        } else if(changeMoney >= 1){
            sumMonet++;
            changeMoney -= 1;
        }
    }
    console.log(sumMonet)
}

coins(["1.23"])