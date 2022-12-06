function sequence2k1(input){
    index = 0;
    let number = Number(input[index])
    index++;

    let k = 1; 
    
    while(k <= number){
        console.log(k)
        k = k * 2 + 1;
    }

}

sequence2k1(["31"])