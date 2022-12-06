function travelAgency(input){

    let nameCity = input[0];
    let typePackage = input[1];
    let ownVip = input[2];
    let counterDay = input[3];

    let allPayPrice = 0;

    let bullFlag = false;
    let dayFlag = false;
    
    if(counterDay < 1){
        console.log(`Days must be positive number!`);
        dayFlag = true;
    }

    if(counterDay > 7){
        counterDay--;
    }
    
    if(dayFlag !== true){

        switch(ownVip){
            case "yes":
                switch(nameCity){
                    case "Bansko":
                    case "Borovets":
                        switch(typePackage){
                            case "noEquipment": allPayPrice = ((counterDay * 80) * 0.95); break;
                            case "withEquipment": allPayPrice = ((counterDay * 100) * 0.90); break;
                            default: console.log(`Invalid input!`); bullFlag = true; break;
                        }
                    break;
                    case "Varna":
                    case "Burgas":
                        switch(typePackage){
                            case "noBreakfast": allPayPrice = ((counterDay * 100) * 0.93); break;
                            case "withBreakfast": allPayPrice = ((counterDay * 130) * 0.88); break;
                            default: console.log(`Invalid input!`); bullFlag = true; break;
                        }
                    break;
                    default: console.log(`Invalid input!`); bullFlag = true; break;
                }
            break;
            case "no":
                switch(nameCity){
                    case "Bansko":
                    case "Borovets":
                        switch(typePackage){
                            case "noEquipment": allPayPrice = (counterDay * 80); break;
                            case "withEquipment": allPayPrice = (counterDay * 100); break;
                            default: console.log(`Invalid input!`); bullFlag = true; break;
                        }
                    break;
                    case "Varna":
                    case "Burgas":
                        switch(typePackage){
                            case "noBreakfast": allPayPrice = (counterDay * 100); break;
                            case "withBreakfast": allPayPrice = (counterDay * 130); break;
                            default: console.log(`Invalid input!`); bullFlag = true; break;
                        }
                    break;
                    default: console.log(`Invalid input!`); bullFlag = true; break;
                }
            break;
        }
    }
    if(bullFlag !== true && dayFlag !== true){
        console.log(`The price is ${(allPayPrice).toFixed(2)}lv! Have a nice time!`)
    }
}

travelAgency(["Varna",
"noEquipment",
"yes",
"5"])
