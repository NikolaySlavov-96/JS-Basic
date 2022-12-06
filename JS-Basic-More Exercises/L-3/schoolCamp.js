function schoolCamp(input){

    let season = input[0];
    let group = input[1];
    let qualityStudent = Number(input[2]);
    let qualityNight = Number(input[3]);
    let sumPriceNights = 0;
    let discount = 0;
    let sport = 0;

    switch(season){
        case "Winter":
            switch(group){
                case "boys":sumPriceNights = qualityNight * 9.60;
                case "boys": sport = "Judo"; break;
                case "girls": sumPriceNights = qualityNight * 9.60;
                case "girls": sport = "Gymnastics"; break;
                case "mixed": sumPriceNights = qualityNight * 10;
                case "mixed": sport = "Ski"; break;
            }
        break;
        case "Spring":
            switch(group){
                case "boys": sumPriceNights = qualityNight * 7.20;
                case "boys": sport = "Tennis"; break;
                case "girls": sumPriceNights = qualityNight * 7.20;
                case "girls": sport = "Athletics"; break;
                case "mixed": sumPriceNights = qualityNight * 9.50;
                case "mixed": sport = "Cycling"; break;
            }
        break;
        case "Summer":
            switch(group){
                case "boys": sumPriceNights = qualityNight * 15;
                case "boys": sport = "Football"; break;
                case "girls": sumPriceNights = qualityNight * 15;
                case "girls": sport = "Volleyball"; break;
                case "mixed": sumPriceNights = qualityNight * 20;
                case "mixed": sport = "Swimming"; break;
            }
        break;
    }
    let sumPriceGroup = sumPriceNights * qualityStudent
    
    if(qualityStudent >= 10 && qualityStudent < 20){
        discount = sumPriceGroup * 0.95; 
    } else if(qualityStudent >= 20 && qualityStudent < 50){
        discount = sumPriceGroup * 0.85;
    } else if(qualityStudent >= 50){
        discount = sumPriceGroup * 0.50;
    } else{
        discount = sumPriceGroup
    }
    console.log(`${sport} ${(discount).toFixed(2)} lv.`)
}

schoolCamp (["Winter" , "mixed" , "9" , "15"])