function vetParking(input){

    let qualityDay = Number(input[0]);
    let qualityHour = Number(input[1]);

    let allPay = 0;

    for(let n = 1; n <= qualityDay; n++){
        let payToPark = 0;
        for(let q = 1; q <= qualityHour; q++){
            if(n % 2 === 0 && q % 2 !== 0){
                payToPark += 2.50;
            } else if(n % 2 !== 0 && q % 2 === 0){
                payToPark += 1.25;
            } else {
                payToPark += 1;
            }
        }
        console.log(`Day: ${n} - ${(payToPark).toFixed(2)} leva`)
        allPay += payToPark
    }
    console.log(`Total: ${(allPay).toFixed(2)} leva`)
}

vetParking(["2",
"5"])
