function series(input){
    
    let index = 0;
    let budget = Number(input[index++]);
    let qualitySerials = Number(input[index++]);
    let nameFilms = input[index++];
    let priceFilm = Number(input[index++]);

    let payPrice = 0;

    for(let n = 1; n <= qualitySerials; n++){

        switch(nameFilms){
            case "Thrones": priceFilm *= 0.50; break;
            case "Lucifer": priceFilm *= 0.60; break;
            case "Protector": priceFilm *= 0.70; break;
            case "TotalDrama": priceFilm *= 0.80; break;
            case "Area": priceFilm *= 0.90; break;
        }

        payPrice += Number(priceFilm);
        nameFilms = input[index++];
        priceFilm = Number(input[index++]);
    }

    if(budget >= payPrice){
        console.log(`You bought all the series and left with ${(budget - payPrice).toFixed(2)} lv.`)
    } else {
        console.log(`You need ${(payPrice - budget).toFixed(2)} lv. more to buy the series!`)
    }
}

series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])

