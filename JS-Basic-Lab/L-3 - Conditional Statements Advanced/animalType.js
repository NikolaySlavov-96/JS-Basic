function animalType(input){

    let nameAnimal = input[0];

    switch(nameAnimal){
        case "dog": console.log("mammal"); break;
        case "crocodile":
        case "tortoise":
        case "snake": console.log("reptile"); break;
        default: console.log("unknown"); break;    
    }
}
animalType(["dog"])