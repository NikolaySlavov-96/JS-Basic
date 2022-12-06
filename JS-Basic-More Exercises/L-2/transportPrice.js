function transportPrice (input){

    let kilometer = Number(input[0]);
    let daysW = input[1];

    let priceBus = 0;
    let priceTrain = 0;
    let sumPrice = 0;

    if(kilometer < 20){
        switch(daysW){
            case "day": sumPrice = 0.70 + (kilometer * 0.79); break;
            case "night": sumPrice = 0.70 + (kilometer * 0.90); break;
        }
    } else {
        if(kilometer >= 100){
            priceBus = kilometer * 0.06
            priceTrain = kilometer * 0.09
                if(priceTrain <= priceBus){
                    sumPrice = priceTrain;
                } else {
                    sumPrice = priceBus;
                }
        } else {
            sumPrice = kilometer * 0.09;  
        }
    }
    console.log(sumPrice.toFixed(2))
}

transportPrice(["100" , "day"])