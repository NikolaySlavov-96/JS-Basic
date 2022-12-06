function flowers(input){

    let qualityHrizanteme = Number(input[0]);
    let qualityRozi = Number(input[1]);
    let qualityLaleta = Number(input[2]);
    let seasone = input[3];
    let holliday = input[4];
    let price = 0;

    switch(seasone){
        case "Spring":
        case "Summer":
            price = (qualityHrizanteme * 2.00) + (qualityRozi * 4.10) + (qualityLaleta * 2.50); break;
        case "Autumn":
        case "Winter":
            price = (qualityHrizanteme * 3.75) + (qualityRozi * 4.50) + (qualityLaleta * 4.15); break;
    }

    if(holliday === "Y"){
        price *= 1.15;
    }

    if(seasone === "Spring"){
        if(qualityLaleta > 7){
            price *= 0.95;
        }
    } else if(seasone === "Winter"){
        if(qualityRozi >= 10){
            price *= 0.90;
        }
    }
    if(qualityHrizanteme + qualityLaleta + qualityRozi > 20){
        price = (price * 0.80) + 2; 
    } else {
        price += 2;
    }
    console.log((price).toFixed(2))
}
flowers(["2" , "4" , "8" , "Spring" , "Y"])