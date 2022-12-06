function fuelTank(input){

    let fuelType = (input[0]);
    let fuelLiters = Number(input[1]);

    let name = fuelType.toLowerCase ();

    if(fuelType == "Diesel" || fuelType == "Gasoline" || fuelType == "Gas"){
        if(fuelLiters >= 25){
            console.log(`You have enough ${name}.`)
        } else if(fuelLiters < 25){
            console.log(`Fill your tank with ${name}!`);
        }
    } else { 
        console.log("Invalid fuel!")
    }
} 
fuelTank(["efr" , "200"]);