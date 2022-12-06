function matchTickets(input){

    let budget = Number(input[0]);
    let categoru = input[1];
    let people = Number(input[2]);

    let travelSum = 0;
    let tickets = 0;

    if(people < 4){
        travelSum = budget * 0.25;
    } else if(people <= 9){
        travelSum = budget * 0.40;
    } else if(people <= 24){
        travelSum = budget * 0.50;
    } else if(people <= 49){
       travelSum = budget * 0.60;
    } else if(people > 50){
       travelSum = budget * 0.75;
    }

    if(categoru === "VIP"){
        tickets = people * 499.99
    } else if(categoru === "Normal"){
        tickets = people * 249.99
    }
    if(tickets <= travelSum){
        console.log(`Yes! You have ${(travelSum - tickets).toFixed(2)} leva left.`)
    } else if(tickets >= travelSum){
        console.log(`Not enough money! You need ${(tickets - travelSum).toFixed(2)} leva.`)
    }
}

matchTickets(["30000" , "VIP" , "49"])