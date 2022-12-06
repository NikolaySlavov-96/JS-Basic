function carToGo(input){

    let budget = Number(input[0]);
    let seasone = input[1];

    if(budget <= 100){
        console.log("Economy class");
        switch(seasone){
            case "Summer": console.log(`Cabrio - ${(budget * 0.35).toFixed(2)}`); break;
            case "Winter": console.log(`Jeep - ${(budget * 0.65).toFixed(2)}`); break;
        }
    } else if(budget <= 500){
        console.log("Compact class");
        switch(seasone){
            case "Summer": console.log(`Cabrio - ${(budget * 0.45).toFixed(2)}`); break;
            case "Winter": console.log(`Jeep - ${(budget * 0.80).toFixed(2)}`); break;
        }
    } else if(budget > 500){
        console.log("Luxury class");
        switch(seasone){
            case "Summer":
            case "Winter": console.log(`Jeep - ${(budget * 0.90).toFixed(2)}`); break;
        }
    }
}
carToGo(["1010" , "Summer"]);