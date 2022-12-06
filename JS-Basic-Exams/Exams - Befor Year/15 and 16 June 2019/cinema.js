function cinema(input){

    let index = 0
    let capacityHall = Number(input[index++]);
    let command = input[index++];

    let inPeople = 0;
    let payTax = 0;

    let isCommand = false;

    while(command !== "Movie time!"){
        let people = Number(command);

        if((capacityHall < (inPeople + people))){
            break;
        }

        inPeople += people;
        payTax += people * 5
        if(people % 3 === 0){
            payTax -= 5;
        }
        command = input[index++];
        if(command === "Movie time!"){
            isCommand = true;
        }
    }

    if(isCommand === true){
        console.log(`There are ${capacityHall - inPeople} seats left in the cinema.`)
    } else if(isCommand === false) {
        console.log(`The cinema is full.`)
    }
    console.log(`Cinema income - ${payTax} lv.`)
}

cinema(["50",
"15",
"10",
"10",
"15",
"5"])