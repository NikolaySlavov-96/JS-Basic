function minNumber(input){
    index = 0;
    let command = input[index];
    index++;

    let minNumber = Number.MAX_SAFE_INTEGER;

    while(command !== "Stop"){
        let sum = Number(command);

        if(sum < minNumber){
            minNumber = sum;
        }

        command = input[index];
        index++;
    }
    console.log(minNumber)
}

minNumber(["-1",
"-2",
"Stop"])

