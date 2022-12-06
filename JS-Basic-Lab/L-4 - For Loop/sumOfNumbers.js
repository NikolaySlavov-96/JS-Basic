function sumOfNumbers(input){

    let stringSum = String(input[0]);
    let sum = 0;

    for(let i = 0; i < stringSum.length; i++){
        let num = Number(stringSum[i])
        sum += num; 
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(["12345"])