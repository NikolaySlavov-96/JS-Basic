function equalPairs(input){

    let index = 0;
    let plNumber = Number(input[index++]);
    let numbersSearch = Number(input[index++]);

    let minValue = Number.MIN_SAFE_INTEGER;
    let maxValue = Number(0);
    let value = 0;
    let firstTwo = 0;
    let SecondTwo = 0;
    let avgSum = 0 + "";

    for(let n = 1; n <= plNumber; n++){
        value++;
        let firstNumber = Number(numbersSearch);
        numbersSearch = input[index++];
        let secondNumber = Number(numbersSearch)
        numbersSearch = input[index++];

        if(value % 2 !== 0) {
            firstTwo += firstNumber + secondNumber;
        } else if(value % 2 === 0) {
            SecondTwo += firstNumber + secondNumber;
        }
        if(firstTwo === SecondTwo){
            avgSum += firstTwo + SecondTwo
        }
    }
    
    if((firstTwo === 0 && SecondTwo !== 0 || firstTwo !== 0 && SecondTwo === 0) && plNumber === 1){
        console.log(`Yes, value=${firstTwo + SecondTwo}`)
    } else if(firstTwo !== SecondTwo && (firstTwo >= SecondTwo)) {
        console.log(`No, maxdiff=${firstTwo - SecondTwo}`)
    } else if(firstTwo !== SecondTwo && (firstTwo <= SecondTwo)) {
        console.log(`No, maxdiff=${SecondTwo - firstTwo}`)
    } else if(firstTwo === avgSum && SecondTwo === avgSum) {
        console.log(`Yes, value=${firstTwo + SecondTwo}`)
    }
}

equalPairs([ '3', '1', '2', '0', '3' , '4' , '-1'])

//([ '1', '5', '5'])
//([ '2', '1', '2', '2', '2' ])
//([ '2', '-1', '2', '0', '-1' ])
//([ '4', '1', '1', '3', '1' , '2' , '2' , '0' , '0'])