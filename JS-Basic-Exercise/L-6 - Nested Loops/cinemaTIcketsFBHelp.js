function cinemaTickets(input) {
    let index = 0;     
    let comand = input[index];
     
    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;
    let totalTicketCounter = 0;
     
    while (comand !=="Finish") {
        let name = comand;
        index ++;
        let freeSpaces = Number(input[index]);
        index ++;
     
        let ticketType = input[index];
        let ticketCounter = 0;
     
        while (ticketType !=="End") {
            ticketCounter++;
     
            switch (ticketType) {
                case "student": studentCounter++;break;
                    case "standard": standardCounter++;break;
                        case "kid": kidCounter++;break;  
            }
            if (ticketCounter>= freeSpaces) {
                break;
            }
            index++;
            ticketType = input[index];
        }
        totalTicketCounter += ticketCounter;
        let resultSingleFilm = ticketCounter/freeSpaces * 100
        console.log(`${name} - ${(resultSingleFilm).toFixed(2)}% full.`);
        
        index++;
        comand= input[index];
    }
    console.log(`Total tickets: ${totalTicketCounter}`);
    console.log(`${(studentCounter/totalTicketCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter/totalTicketCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter/totalTicketCounter * 100).toFixed(2)}% kids tickets.`);
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