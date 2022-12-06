function operationsBetweenNumbers(input){

    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operat = input[2];
    let sumPre = 0;
    let numbers = 0;

    switch(operat){
        case "+": sumPre = N1 + N2
            if(sumPre % 2 === 0){
                numbers = "even";
            } else {
                numbers = "odd";
            }
        break;
        case "-": sumPre = N1 - N2
            if(sumPre % 2 ===0){
                numbers = "even"
            } else {
                numbers = "odd"
            }
        break;
        case "*": sumPre = N1 * N2
            if(sumPre % 2 === 0){
                numbers = "even"
            } else { 
                numbers = "odd"
            }
        break;
        case "/": sumPre = N1 / N2; break;
        case "%": sumPre = N1 % N2; break;
    }

   if(operat === "+" || operat === "-" || operat === "*"){
        console.log(`${N1} ${operat} ${N2} = ${sumPre} - ${numbers}`)
   } else if(operat === "/" && N2 !== 0){
        console.log(`${N1} / ${N2} = ${(sumPre).toFixed(2)}`)
   } else if(operat === "%" && N2 !== 0){
        console.log(`${N1} % ${N2} = ${sumPre}`)
   } else if(N2 === 0){
        console.log(`Cannot divide ${N1} by zero`)
   }
}
operationsBetweenNumbers(["10",
"0",
"%"])



