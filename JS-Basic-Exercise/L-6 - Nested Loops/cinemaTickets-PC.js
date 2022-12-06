function cinemaTickets(input) {
    let index = 0;
    let nameFilm = input[index++];
    let freeSpace = input[index++];
    let command = input[index++];

    let ticket = 0;
    let student = 0;
    let standard = 0;
    let kids = 0;
    let isCorrect = false;

    while (isCorrect !== true) {
        while (command !== "End" && command !== "Finish") {
            ticket++;
            if (command === "student") {
                student++;
            } else if (command === "standard") {
                standard++;
            } else if (command === "kid") {
                kids++;
            }
            command = input[index++];
        }
        if (command === "Finish") {
            isCorrect = true;
        }
        console.log(`${nameFilm} - ${((ticket / freeSpace) * 100).toFixed(2)}% full.`);
        nameFilm = input[index++];
        freeSpace = input[index++];
        command = input[index++];
        ticket = 0;
    }
    let totalTickets = standard + student + kids;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((student / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standard / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kids / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}
/// проблем при компилация в Judje

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
