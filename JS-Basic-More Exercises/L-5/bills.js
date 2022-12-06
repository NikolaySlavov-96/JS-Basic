function bills(input){

    let index = 0;
    let moutherAverage = Number(input[index++]);
    let billingElectricity = Number(input[index++]);

    let electricity = 0;
    let water = Number(20);
    let internet = Number(15);
    let other = 0;

    for(let n = 1; n <= moutherAverage; n++){
        electricity += Number(billingElectricity)
        let sumOther = 0;
        sumOther = (billingElectricity + water + internet) * 0.20;
        other += (billingElectricity + water + internet + sumOther)
        billingElectricity = Number(input[index++])
    }
    console.log(`Electricity: ${(electricity).toFixed(2)} lv`)
    console.log(`Water: ${(moutherAverage * water).toFixed(2)} lv`)
    console.log(`Internet: ${(moutherAverage * internet).toFixed(2)} lv`)
    console.log(`Other: ${(other).toFixed(2)} lv`)
    console.log(`Average: ${((electricity + (moutherAverage * water) + (moutherAverage * internet) + other) / moutherAverage).toFixed(2)} lv`)
}

bills([ '5', '68.63', '89.25', '132.53', '93.53', '63.22' ])