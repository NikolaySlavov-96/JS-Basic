function easterGuests(input){
    
    let waitingGuest = input[0];
    let budget = input[1];

    let cakeOne = Math.ceil(waitingGuest / 3);
    let eggsPerPeople = waitingGuest * 2;

    let allPay = (cakeOne * 4) + (eggsPerPeople * 0.45)

    if(budget >= allPay){
        console.log(`Lyubo bought ${cakeOne} Easter bread and ${eggsPerPeople} eggs.`)
        console.log(`He has ${(budget - allPay).toFixed(2)} lv. left.`)
    } else { 
        console.log(`Lyubo doesn't have enough money.`)
        console.log(`He needs ${(allPay - budget).toFixed(2)} lv. more.`)
    }
}
easterGuests(["9",
"12"])

