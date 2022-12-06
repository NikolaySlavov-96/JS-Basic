function fitnessCard(input){

    let bankAccount = input[0];
    let gender = input[1];
    let age = input[2];
    let sport = input[3];

    let buffer = "";

    switch(gender){
        case "m": 
            if(age > 19){
                switch(sport){
                    case "Gym": 
                        if(bankAccount <= 42){
                            console.log(`You don't have enough money! You need $${(42 - bankAccount).toFixed(2)} more.`)
                        } else {
                            console.log(`You purchased a 1 month pass for ${sport}.`)
                        }
                    break;
                    case "Boxing":
                        if(bankAccount <= 41){
                            console.log(`You don't have enough money! You need $${(41 - bankAccount).toFixed(2)} more.`)
                        } else {
                            console.log(`You purchased a 1 month pass for ${sport}.`)
                        }
                    break;
                    case "Yoga":
                        if(bankAccount <= 45){
                            console.log(`You don't have enough money! You need $${(45 - bankAccount).toFixed(2)} more.`)
                        } else {
                            console.log(`You purchased a 1 month pass for ${sport}.`)
                        }
                    break;
                    case "Zumba":
                        if(bankAccount <= 34){
                            console.log(`You don't have enough money! You need $${(34 - bankAccount).toFixed(2)} more.`)
                        } else {
                            console.log(`You purchased a 1 month pass for ${sport}.`)
                        }
                    break;
                    case "Dances":
                        if(bankAccount <= 51){
                            console.log(`You don't have enough money! You need $${(51 - bankAccount).toFixed(2)} more.`)
                        } else {
                            console.log(`You purchased a 1 month pass for ${sport}.`)
                        }
                    break;
                    case "Pilates":
                        if(bankAccount <= 39){
                            console.log(`You don't have enough money! You need $${(39 - bankAccount).toFixed(2)} more.`)
                        } else {
                            console.log(`You purchased a 1 month pass for ${sport}.`)
                        }
                    break;
                }
            } else if(age <= 19){
                switch(sport){
                    case "Gym": 
                        if(bankAccount <= (42 * 0.80)){
                            console.log(`You don't have enough money! You need $${((42 * 0.80) - bankAccount).toFixed(2)} more.`)
                        } else {
                            console.log(`You purchased a 1 month pass for ${sport}.`)
                        }
                    break;
                    case "Boxing":
                        if(bankAccount <= (41 * 0.80)){
                            console.log(`You don't have enough money! You need $${((41 * 0.80) - bankAccount).toFixed(2)} more.`)
                        } else {
                            console.log(`You purchased a 1 month pass for ${sport}.`)
                        }
                    break;
                    case "Yoga":
                        if(bankAccount <= (45 * 0.80)){
                            console.log(`You don't have enough money! You need $${((45 * 0.80) - bankAccount).toFixed(2)} more.`)
                        } else {
                            console.log(`You purchased a 1 month pass for ${sport}.`)
                        }
                    break;
                    case "Zumba":
                        if(bankAccount <= (34 * 0.80)){
                            console.log(`You don't have enough money! You need $${((34 * 0.80) - bankAccount).toFixed(2)} more.`)
                        } else {
                            console.log(`You purchased a 1 month pass for ${sport}.`)
                        }
                    break;
                    case "Dances":
                        if(bankAccount <= (51 * 0.80)){
                            console.log(`You don't have enough money! You need $${((51 * 0.80) - bankAccount).toFixed(2)} more.`)
                        } else {
                            console.log(`You purchased a 1 month pass for ${sport}.`)
                        }
                    break;
                    case "Pilates":
                        if(bankAccount <= (39 * 0.80)){
                            console.log(`You don't have enough money! You need $${((39 * 0.80) - bankAccount).toFixed(2)} more.`)
                        } else {
                            console.log(`You purchased a 1 month pass for ${sport}.`)
                        }
                    break;
                }
            }
        break;
        case "f": 
        if(age > 19){
            switch(sport){
                case "Gym": 
                    if(bankAccount <= 42){
                        console.log(`You don't have enough money! You need $${(35 - bankAccount).toFixed(2)} more.`)
                    } else {
                        console.log(`You purchased a 1 month pass for ${sport}.`)
                    }
                break;
                case "Boxing":
                    if(bankAccount <= 41){
                        console.log(`You don't have enough money! You need $${(37 - bankAccount).toFixed(2)} more.`)
                    } else {
                        console.log(`You purchased a 1 month pass for ${sport}.`)
                    }
                break;
                case "Yoga":
                    if(bankAccount <= 45){
                        console.log(`You don't have enough money! You need $${(42 - bankAccount).toFixed(2)} more.`)
                    } else {
                        console.log(`You purchased a 1 month pass for ${sport}.`)
                    }
                break;
                case "Zumba":
                    if(bankAccount <= 34){
                        console.log(`You don't have enough money! You need $${(31 - bankAccount).toFixed(2)} more.`)
                    } else {
                        console.log(`You purchased a 1 month pass for ${sport}.`)
                    }
                break;
                case "Dances":
                    if(bankAccount <= 51){
                        console.log(`You don't have enough money! You need $${(53 - bankAccount).toFixed(2)} more.`)
                    } else {
                        console.log(`You purchased a 1 month pass for ${sport}.`)
                    }
                break;
                case "Pilates":
                    if(bankAccount <= 39){
                        console.log(`You don't have enough money! You need $${(37 - bankAccount).toFixed(2)} more.`)
                    } else {
                        console.log(`You purchased a 1 month pass for ${sport}.`)
                    }
                break;
            }
        } else if(age <= 19){
            switch(sport){
                case "Gym": 
                    if(bankAccount <= (42 * 0.80)){
                        console.log(`You don't have enough money! You need $${((35 * 0.80) - bankAccount).toFixed(2)} more.`)
                    } else {
                        console.log(`You purchased a 1 month pass for ${sport}.`)
                    }
                break;
                case "Boxing":
                    if(bankAccount <= (41 * 0.80)){
                        console.log(`You don't have enough money! You need $${((37 * 0.80) - bankAccount).toFixed(2)} more.`)
                    } else {
                        console.log(`You purchased a 1 month pass for ${sport}.`)
                    }
                break;
                case "Yoga":
                    if(bankAccount <= (45 * 0.80)){
                        console.log(`You don't have enough money! You need $${((42 * 0.80) - bankAccount).toFixed(2)} more.`)
                    } else {
                        console.log(`You purchased a 1 month pass for ${sport}.`)
                    }
                break;
                case "Zumba":
                    if(bankAccount <= (34 * 0.80)){
                        console.log(`You don't have enough money! You need $${((31 * 0.80) - bankAccount).toFixed(2)} more.`)
                    } else {
                        console.log(`You purchased a 1 month pass for ${sport}.`)
                    }
                break;
                case "Dances":
                    if(bankAccount <= (51 * 0.80)){
                        console.log(`You don't have enough money! You need $${((53 * 0.80) - bankAccount).toFixed(2)} more.`)
                    } else {
                        console.log(`You purchased a 1 month pass for ${sport}.`)
                    }
                break;
                case "Pilates":
                    if(bankAccount <= (39 * 0.80)){
                        console.log(`You don't have enough money! You need $${((37 * 0.80) - bankAccount).toFixed(2)} more.`)
                    } else {
                        console.log(`You purchased a 1 month pass for ${sport}.`)
                    }
                break;
            }
        } 
    break;
    }
}

fitnessCard(["30",
"m",
"18",
"Gym"])