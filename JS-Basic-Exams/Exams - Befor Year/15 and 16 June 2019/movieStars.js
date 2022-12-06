function movieStars(input){
    
    let index = 0;
    let budget = Number(input[index++]);
    let command = input[index++];

    let payTaxAndActor = 0;

    while(command !== "ACTION"){
        let nameActor = command;
        let sizeNameActor = 0;
        if(budget < payTaxAndActor){
            break;
        }
        for(let n = 1; n <= nameActor.length; n++){
            sizeNameActor++;
        }
        if(sizeNameActor <= 15){
            command = Number(input[index++]);
            budget -= command;
        } else {
            budget -= (budget * 0.20);
        }
        command = input[index++]
        
    }
    if(budget >= payTaxAndActor){
        console.log(`We are left with ${(budget - payTaxAndActor).toFixed(2)} leva.`)
    } else {
        console.log(`We need ${(payTaxAndActor - budget).toFixed(2)} leva for our actors.`)
    }
}
movieStars(["90000",
"Christian Bale",
"70000.50",
"Leonard DiCaprio",
"Kevin Spacey",
"24000.99"])
