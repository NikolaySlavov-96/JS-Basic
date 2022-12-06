function newHouse(input){

    let typeFlowers = input[0];
    let qualityFlowers = Number(input[1]);
    let budgeth = Number(input[2]);

    sumPriceFlowers = 0.00;

    switch(typeFlowers){
        case "Roses": 
            if(qualityFlowers > 80){
                sumPriceFlowers = qualityFlowers * (5 - (5 * 0.10))
            } else { 
                sumPriceFlowers = qualityFlowers * 5
            }
        break;
        case "Dahlias":
            if(qualityFlowers > 90){
                sumPriceFlowers = qualityFlowers * (3.80 - (3.80 * 0.15))
            } else {
                sumPriceFlowers = qualityFlowers * 3.8
            }
        break;
        case "Tulips":
            if(qualityFlowers > 80){
                sumPriceFlowers = qualityFlowers * (2.80 - (2.80 * 0.15))
            } else (
                sumPriceFlowers = qualityFlowers * 2.80
            )
        break;
        case "Narcissus":
            if(qualityFlowers < 120){
                sumPriceFlowers = qualityFlowers * (3 + (3 * 0.15))
            } else { 
                sumPriceFlowers = qualityFlowers * 3
            }
        break;
        case "Gladiolus":
            if(qualityFlowers < 80){
                sumPriceFlowers = qualityFlowers * (2.50 + (2.50 * 0.20))
            } else {
                sumPriceFlowers = qualityFlowers * 2.50
            }
        break;
    }

    if(budgeth >= sumPriceFlowers){
        console.log(`Hey, you have a great garden with ${qualityFlowers} ${typeFlowers} and ${(budgeth - sumPriceFlowers).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(sumPriceFlowers - budgeth).toFixed(2)} leva more.`)
    }
}

newHouse(["Narcissus",
"119",
"360"])
