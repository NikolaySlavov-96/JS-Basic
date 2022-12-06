function aluminumJoinery(input){
    
    let qualityJoinery = input[0];
    let species = input[1];
    let typeDelivery = input[2];

    let totalPrice = 0;
    let isFlag = false;

    if(qualityJoinery < 10){
        console.log(`Invalid order`)
        isFlag = true;
    }
    switch(species){
        case "90X130":
            if(qualityJoinery > 60){
                totalPrice = ((qualityJoinery * 110) * 0.98)
            } else if(qualityJoinery >= 30){
                totalPrice = ((qualityJoinery * 110) * 0.95)
            } else {
                totalPrice = ((qualityJoinery * 110))
            }
        break;
        case "100X150":
            if(qualityJoinery >= 80){
                totalPrice = ((qualityJoinery * 140) * 0.90)
            } else if(qualityJoinery >= 40){
                totalPrice = ((qualityJoinery * 140) * 0.94)
            } else {
                totalPrice = ((qualityJoinery * 140))
            } 
        break;
        case "130X180":
            if(qualityJoinery >= 50){
                totalPrice = ((qualityJoinery * 190) * 0.88)
            } else if(qualityJoinery >= 20){
                totalPrice = ((qualityJoinery * 190) * 0.93)
            } else {
                totalPrice = ((qualityJoinery * 190))
            }
        break;
        case "200X300":
            if(qualityJoinery >= 50){
                totalPrice = ((qualityJoinery * 250) * 0.86)
            } else if(qualityJoinery >= 25){
                totalPrice = ((qualityJoinery * 250) * 0.91)
            } else {
                totalPrice = ((qualityJoinery * 250))
            }
        break;
        default: console.log(`Invalid order`); isFlag = true; break;
    }
    if(typeDelivery === "With delivery"){
        totalPrice += 60;
    }
    if(qualityJoinery > 99){
        totalPrice *= 0.96;
    }
    if(isFlag === false){
        console.log(`${(totalPrice).toFixed(2)} BGN`)
    }
}

aluminumJoinery(["10",
"100X150",
"With delivery"])

