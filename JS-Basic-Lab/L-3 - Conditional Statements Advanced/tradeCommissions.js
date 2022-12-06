function tradeCommissions(input){

    let city = input[0];
    let number = Number(input[1]);
    


    switch(city){
        case "Sofia":
            if(number >= 0 && number <= 500){
                console.log((number * 0.05).toFixed(2)); 
            } else if(number >= 501 && number <= 1000){
                console.log((number * 0.07).toFixed(2));
            } else if(number >= 1001 && number <= 10000){
                console.log((number * 0.08).toFixed(2));
            } else if (number > 10000){
                console.log((number * 0.12).toFixed(2));
            } else { 
                console.log("error");
            }
        break;
        case "Varna":
            if(number >= 0 && number <= 500){
                console.log((number * 0.045).toFixed(2));
            } else if (number >= 501 && number <= 1000){
                console.log((number * 0.075).toFixed(2));
            } else if (number >= 1001 && number <= 10000){
                console.log((number * 0.10).toFixed(2));
            } else if (number > 10000){
                console.log((number * 0.13).toFixed(2));
            } else {
                console.log("error");
            }
        break; 
        case "Plovdiv":
            if(number >= 0 && number <= 500){
                console.log((number * 0.055).toFixed(2));
            } else if(number >= 501 && number <= 1000){
                console.log((number * 0.08).toFixed(2));
            } else if(number >= 1001 && number <= 10000){
                console.log((number * 0.12).toFixed(2));
            } else if(number > 10000){
                console.log((number * 0.145).toFixed(2));
            } else if(number < 0){
                console.log("error");
            }
        break;
        default: console.log("error")  
    }
}

tradeCommissions(["Sofia",
"1500"])
;
