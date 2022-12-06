    function happyCatParking(input){

        let numberDays = input[0];
        let numberHours = input[1];

        let Days = 0;
        let sumAllDayMoney = 0;

        for(let n = 1; n <= numberDays; n++){
            let sumAllHoursMoney = 0;
            Days++;
            for(let m = 1; m <= numberHours; m++){
                if(n % 2 === 0 && m % 2 !== 0){
                    sumAllHoursMoney += 2.50;
                    sumAllDayMoney += 2.50;
                } else if(n % 2 !== 0 && m % 2 === 0){
                    sumAllHoursMoney += 1.25;
                    sumAllDayMoney += 1.25;
                } else {
                    sumAllHoursMoney += 1.00;
                    sumAllDayMoney += 1.00;
                }
            }
            console.log(`Day: ${Days} - ${(sumAllHoursMoney).toFixed(2)} leva`)
        }
        console.log(`Total: ${(sumAllDayMoney).toFixed(2)} leva`)
    }

happyCatParking(['5' , '2'])