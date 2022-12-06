function equalSumsEvenOddPosition(input){

    let beginNumber = Number(input[0]);
    let ednNumber = Number(input[1]);
   
    let printNumber = '';

    for(let i = beginNumber; i <= ednNumber; i++){
 
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        
        for(let k = 0; k <= currentNum.length; k++){
            let digitNumber = Number(currentNum.charAt(k));
            if(k % 2 === 0){
                evenSum += digitNumber;
            } else {
                oddSum += digitNumber;
            }
        }
        if(oddSum === evenSum){
            printNumber += `${i} `
        }
    }
    console.log(printNumber)
}

equalSumsEvenOddPosition(["100000" , "100050"])