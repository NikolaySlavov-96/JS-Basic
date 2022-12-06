function oscars(input){

    let actorName = input[0];
    let pointToAcademu = Number(input[1]);
    let qualituExarcise = Number(input[2]);

    for(let index = 3; index < input.length; index++){

        if(index % 2 !== 0){
            let points = index +1;
            let total = input[index].length * Number(input[points]) / 2;
            pointToAcademu += total;
        }
        if(pointToAcademu > 1250.5){
             //console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointToAcademu.toFixed(1)}!`)
            break;
        }
    }
    if(pointToAcademu < 1250.5){
        console.log(`Sorry, ${actorName} you need ${(1250.5 - pointToAcademu).toFixed(1)} more!`)
    } else {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointToAcademu.toFixed(1)}!`)
    }
}
oscars(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"])

