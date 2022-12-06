function suppliesForSchool (input) {
    let numberPen = Number(input[0]) * 5.8;
    let numberMarks = Number(input[1]) * 7.2;
    let deskLitre = Number(input[2]) * 1.2;
    let offers = Number(input[3]) / 100;

    let allMat = numberPen + numberMarks + deskLitre

    let price = allMat - (allMat * offers)

    console.log(price)
}

suppliesForSchool(["4" , "2" , "5" , "13"]);