function sumNumbers(input){
    index = 0;
    let number = Number(input[index]);
    index++
    sum = 0;

    while(sum < number){
        let tempNumber = Number(input[index]);
        index++;
        sum += tempNumber;
        
    }
    console.log(sum)
}
sumNumbers(["100",
"10",
"20",
"30",
"40"])
