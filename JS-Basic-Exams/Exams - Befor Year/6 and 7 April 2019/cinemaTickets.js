function cinemaTickets(input){

    let index = 0;
    let command = input[index++];
    
    let allBuyBillets = 0;
    let studentBillets = 0;
    let standardBillets = 0;
    let kidBillets = 0;
    
    while(command !== "Finish"){
        let nameFilms = command
        
        let counterFreeSpace = Number(input[index++]);
        let typeSellBillets = input[index++];

        let counterOneFilms = 0;
        while(typeSellBillets !== "End"){
            switch(typeSellBillets){
                case "student": counterOneFilms++; studentBillets++; allBuyBillets++; break;
                case "standard": counterOneFilms++; standardBillets++; allBuyBillets++; break;
                case "kid": counterOneFilms++; kidBillets++; allBuyBillets++; break;
            }
            if(counterFreeSpace <= counterOneFilms){
                break;
            }
            typeSellBillets = input[index++];
        }
        
        console.log(`${nameFilms} - ${((counterOneFilms / counterFreeSpace) * 100).toFixed(2)}% full.`)
        command = input[index++];
    }
    console.log(`Total tickets: ${allBuyBillets}`)
    console.log(`${((studentBillets / allBuyBillets) * 100).toFixed(2)}% student tickets.`)
    console.log(`${((standardBillets / allBuyBillets) * 100).toFixed(2)}% standard tickets.`)
    console.log(`${((kidBillets / allBuyBillets) * 100).toFixed(2)}% kids tickets.`)
}

cinemaTickets([
    "The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish",
]);