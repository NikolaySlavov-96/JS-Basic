function trainTheTrainers(input){
    
    let index = 0;
    let teachers = input[index++];
    let command = input[index++]

    let quality = 0;
    let sumLeter = 0;

    while(command !== "Finish"){
        let presentationName = command;
        command = input[index++];
        let number = 0;
        for(let i = 1; i <= teachers; i++){
            sumLeter++
            number += Number(command)
            quality += Number(command);
            command = input[index++]
        }
        console.log(`${presentationName} - ${(number / teachers).toFixed(2)}.`)
    }
    console.log(`Student's final assessment is ${(quality / sumLeter).toFixed(2)}.`)
}

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


