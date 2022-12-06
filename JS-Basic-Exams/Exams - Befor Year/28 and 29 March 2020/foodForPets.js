function foodForPets(input){

    let index = 0;
    let allDays = Number(input[index++]);
    let allEat = Number(input[index++]);
    let dogEat = Number(input[index++]);
    let catEat = Number(input[index++]);

    let days = 0;
    let eatDog = 0;
    let eatCat = 0;

    let biscuit = 0;

    while(allDays !== days){
        days++;
        if(days % 3 === 0 && days !== 0){
            biscuit += dogEat * 0.10;
            biscuit += catEat * 0.10;
        }
        eatDog += dogEat
        eatCat += catEat

        dogEat = Number(input[index++]);
        catEat = Number(input[index++]);
    }

    console.log(`Total eaten biscuits: ${Math.round(biscuit)}gr.`);
    console.log(`${(((eatDog + eatCat) / allEat) * 100).toFixed(2 )}% of the food has been eaten.`);
    console.log(`${(eatDog / (eatDog + eatCat) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(eatCat / (eatDog + eatCat) * 100).toFixed(2)}% eaten from the cat.`);
}

foodForPets(["6",
"500",
"100",
"30",
"110",
"25",
"120",
"35", '22' ,'44',
'356' , '22' , '86' , '22'])

