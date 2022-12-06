function maxNumber(input){

    index = 0;
    let command = input[index]
    index++;

    let maxNumber = Number.MIN_SAFE_INTEGER;

    while(command !== "Stop"){
        let sum = Number(command);

        if(sum > maxNumber){
        maxNumber = sum;
        }
    
        command = input[index];
        index++;
    }
    console.log(maxNumber)
}

maxNumber(["100",
"99",
"80",
"70",
"Stop"])
