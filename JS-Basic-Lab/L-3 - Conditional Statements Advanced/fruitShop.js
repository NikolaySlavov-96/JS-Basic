function fruitShop(input){

    let products = input[0];
    let dayOfWeek = input [1];
    let quality = Number(input[2]);

    switch(dayOfWeek){
        case "Monday":
        case "Tuesday": 
        case "Wednesday": 
        case "Thursday":
        case "Friday":
        case "Saturday":
        case "Sunday":
            if(dayOfWeek !== "Saturday" && dayOfWeek !== "Sunday"){
                switch(products){
                    case "banana": console.log((quality * 2.50).toFixed(2)); break;
                    case "apple": console.log((quality * 1.20).toFixed(2)); break;
                    case "orange": console.log((quality * 0.85).toFixed(2)); break;
                    case "kiwi": console.log((quality * 2.70).toFixed(2)); break;
                    case "pineapple": console.log((quality * 5.50).toFixed(2)); break;
                    case "grapes": console.log((quality * 3.85).toFixed(2)); break;
                    default: console.log("error"); break;
            }
            } else { 
                switch(products){
                   case "banana": console.log((quality * 2.70).toFixed(2)); break;
                    case "apple": console.log((quality * 1.25).toFixed(2)); break;
                    case "orange": console.log((quality * 0.90).toFixed(2)); break;
                    case "grapefruit": console.log((quality * 1.60).toFixed(2)); break;
                    case "kiwi": console.log((quality * 3.00).toFixed(2)); break;
                    case "pineapple": console.log((quality * 5.60).toFixed(2)); break;
                    case "grapes": console.log((quality * 4.20).toFixed(2)); break;
                    default: console.log("error"); break;
                 }
        } 
        break;
        default: console.log("error"); break;
    }
}

fruitShop(["banana", 
"Monday",
"2.5"])







