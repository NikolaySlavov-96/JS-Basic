function averageNumber(input){

    let index = 0;
    let n = Number(input[index++]);
    let command = input[index++];

    let sumRead = 0;
    let sumNumbers = 0;

    while(n !== sumRead){
        sumRead++;
        sumNumbers += Number(command);
        command = input[index++]
    }
    console.log((sumNumbers / sumRead).toFixed(2))
}

averageNumber(["2","6","4"])