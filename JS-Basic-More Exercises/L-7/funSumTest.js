function funSumTest(input){

    let romp = Number(input[0]);
    
    let funSum = "";

    for(let n = 1; n <= romp; n++){   
        switch(n){
            case 1: funSum = (`*`); break;
            case 2: funSum = (`**`); break;
            case 3: funSum = (`***`); break;
            case 4: funSum = (`****`); break;
            case 5: funSum = (`*****`); break;
        }
            
            console.log(funSum)
    }
    
}

funSumTest(['5'])