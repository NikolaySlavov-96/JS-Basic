function birthdayParty(input){

    let bud = input[0];
    let bud2 = input[1];
    let bud3 = input[2];
    let bud4 = input[3];

    let budjet = Number(bud + bud2 + bud3 + bud4);

    let sumChisseCake = budjet * 0.20;
    let sumDrinks = sumChisseCake * 0.55;
    let sumAnimation = budjet / 3;

    let final = budjet + sumChisseCake + sumDrinks + sumAnimation;

    console.log((final))
}

birthdayParty("3720")