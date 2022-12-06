function numberPyramid(input){

    let n = Number(input[0]);

    let currentNumber = 1;
    let isCorrect = false;
    let printNumber = "";

    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i ; j++){
            if(currentNumber > n){
                isCorrect = true;
                break;
            }  
            printNumber += (`${currentNumber} `);
            currentNumber++;
        }
        console.log(printNumber)
        printNumber = "";
        if(isCorrect !== false){
            break;
        }
    }
}

numberPyramid(["10"]);