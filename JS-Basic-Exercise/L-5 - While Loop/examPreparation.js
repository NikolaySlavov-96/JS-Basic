function examPreparation(input){

    let index = 0;
    let price = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let badPrice = 0;
    let avgScore = 0;
    let score = 0; //evaluation
    isCondition = false;
    let lastExam = "";

    while(command !== "Enough"){
        lastExam = command
        command = input[index++];
        let inspect = Number(command);
        
        if(command === "Enough"){
            break;
        }
        if(command !== ""){
            if(inspect <= 4){
                score++;
                badPrice++;
                avgScore += Number(inspect);
            } else{
                score++;
                avgScore += Number(inspect);
            }
            command = input[index]
            index++
        }
        

        if(badPrice >= price){
            console.log(`You need a break, ${badPrice} poor grades.`);
            isCondition = true;
            break;
        }

    }
    if(isCondition !== true){
        console.log(`Average score: ${(avgScore / score).toFixed(2)}`)
        console.log(`Number of problems: ${score}`);
        console.log(`Last problem: ${lastExam}`)
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])

