function puppyCare(input){

    let index = 0;
    let foodDog = input[index++];
    let command = input[index++];

    let foodDogGram = foodDog * 1000;

    let eatDog = 0;

    while(command !== "Adopted"){
        eatDog += Number(command);
        command = input[index++];
    }

    if(foodDogGram >= eatDog){
        console.log(`Food is enough! Leftovers: ${(foodDogGram - eatDog)} grams.`)
    } else {
        console.log(`Food is not enough. You need ${(eatDog - foodDogGram)} grams more.`)
    }

}
puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])

