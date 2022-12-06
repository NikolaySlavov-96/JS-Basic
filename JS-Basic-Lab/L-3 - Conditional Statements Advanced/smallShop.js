function smallShop(input){

    let product = input[0];
    let city = input[1];
    let value = Number(input[2]);

    let price = 0.00; 

    switch(city){
        case "Sofia": 
            switch(product){
                case "coffee": price = value * 0.5; break;                
                case "water": price = value * 0.8; break;
                case "beer": price = value * 1.20; break;
                case "sweets": price = value * 1.45; break;
                case "peanuts": price = value * 1.6; break;                
            }
        break;
        case "Plovdiv":
            switch(product){
                case "coffee": price = value * 0.4; break;
                case "water": price = value * 0.7; break;
                case "beer": price = value * 1.15; break;
                case "sweets": price = value * 1.3; break;
                case "peanuts": price = value * 1.5; break;                
            }
        break;
        case "Varna":
            switch(product){
                case "coffee": price = value * 0.45; break;             
                case "water": price = value * 0.7; break; 
                case "beer": price = value * 1.10; break; 
                case "sweets": price = value * 1.35; break; 
                case "peanuts": price = value * 1.55; break;                 
            }  
        break;    
    }  
    console.log(price)
}

smallShop(["coffee","Sofia","2"]);
