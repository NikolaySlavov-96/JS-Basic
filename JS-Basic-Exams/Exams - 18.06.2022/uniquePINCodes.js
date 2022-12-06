function uniquePINCodes(input){

    let index = 0;
    let first = input[index];
    index++;
    let second = input[index];
    index++;
    let third = input[index];

    for(let i = 1; i <= first; i++){
        for(let j = 2; j <= second; j++){
            for(let k = 1; k <= third; k++){
              if(i % 2 === 0 && (j % 2 !== 0 || j / 2 === 1 ) && j !== 9 && k % 2 === 0){
                console.log(`${i} ${j} ${k}`)
                
              }
            } 
        }
    }
}
uniquePINCodes(["3" , "5" , "5"])
