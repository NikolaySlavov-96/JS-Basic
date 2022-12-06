function movieDestination(input){

    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let qualityDays = Number(input[3]);

    let finalPayPrice = 0;

    switch(destination){
        case "Dubai":
            switch(season){
                case "Summer": finalPayPrice = ((qualityDays * 40000) * 0.70); break;
                case "Winter": finalPayPrice = ((qualityDays * 45000) * 0.70); break;
            }
        break;
        case "Sofia":
            switch(season){
                case "Summer": finalPayPrice = ((qualityDays * 12500) * 1.25); break;
                case "Winter": finalPayPrice = ((qualityDays * 17000) * 1.25); break;
            }
        break;
        case "London":
            switch(season){
                case "Summer": finalPayPrice = (qualityDays * 20250); break;
                case "Winter": finalPayPrice = (qualityDays * 24000); break;
            }
        break;
    }
    if(budget > finalPayPrice){
        console.log(`The budget for the movie is enough! We have ${(budget - finalPayPrice).toFixed(2)} leva left!`)
    } else {
        console.log(`The director needs ${(finalPayPrice - budget).toFixed(2)} leva more!`)
    }
}

movieDestination(["1000000",
"Dubai",
"Summer",
"5"])

