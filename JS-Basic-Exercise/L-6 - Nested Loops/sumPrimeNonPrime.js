function sumPrimeNonPrime(input){
    let index = 0;
    let command = input[index++];

    let prime = 0;
    let unPrime = 0;

    while(command !== "stop"){
        let number = command;
        if(number < 0){
            console.log("Number is negative.")
            command = input[index++]
            continue;
        }
        if((number % 2 !== 0 || number / 2 === 1) && number !== 9){
            prime += Number(number);
        } else {
            unPrime += Number(number);
        }
        
        command = input[index++]
    }
    console.log(`Sum of all prime numbers is: ${prime}`)
    console.log(`Sum of all non prime numbers is: ${unPrime}`)
}

sumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"]);