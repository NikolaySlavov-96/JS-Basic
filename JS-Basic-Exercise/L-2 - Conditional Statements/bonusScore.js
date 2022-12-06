function bonusScore(input){

    let scoreBegin = Number(input[0]);
    let bonus = 0.0;

    if(scoreBegin <= 100){
        bonus = 5;
    } else if (scoreBegin < 1000){
        sum = scoreBegin * 0.2;
        bonus = sum;
    } else {
        bonus = scoreBegin * 0.10;
    }

    if (scoreBegin % 2 === 0 ){ 
        bonus += 1;
    } else if (scoreBegin % 10 === 5){
        bonus += 2;
    }

    console.log(bonus);
    console.log(scoreBegin + bonus);
}

bonusScore(["2703"]);