function pets (input){

    let numberDays = Number(input[0]);
    let petsEatKg = Number(input[1]);
    let petsEatDog = Number(input[2]);
    let petsEatCat = Number(input[3]);
    let petsEatTurtle = Number(input[4]) / 1000;

    let sumEatDog = numberDays * petsEatDog;
    let sumEatCat = numberDays * petsEatCat;
    let sumEatTurtle = (numberDays * petsEatTurtle);

    let sumEatKg = sumEatDog + sumEatCat + sumEatTurtle; 

    if(sumEatKg <= petsEatKg){
        console.log(`${Math.floor(petsEatKg - sumEatKg)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(sumEatKg - petsEatKg)} more kilos of food are needed.`)
    }
}
pets(["2" , "10" , "1" , "1" , "1200"])