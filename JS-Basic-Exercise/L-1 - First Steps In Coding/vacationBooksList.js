function vacationBooksList (input) {
    let page = (input[0]);
    let pagePerHours = (input[1]);
    let days = (input[2]);

    let housrsFin = page / pagePerHours
    let final = housrsFin / days
    
    console.log(final)

}

vacationBooksList(["423" , "15" , "4"]);