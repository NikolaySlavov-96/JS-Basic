function depositCalculator (input) { 
    let депозиранаСума = Number(input[0]);
    let срокНаДепозита = Number(input[1]);
    let годишенЛихвенПроцент = Number(input[2]) / 100;

    let сума = депозиранаСума  + срокНаДепозита * ((депозиранаСума * годишенЛихвенПроцент ) / 12)

    console.log(сума);

}

depositCalculator(["2350" , "6" , "7"]);