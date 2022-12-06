function rhombusOfStars(input){

    let romp = Number(input[0]);
    
    let fumSum = "";
    let colum = romp + 0;

    for(let v = 1; v <= romp; v++){
        colum++;
        for(let q = 1; q <= colum; q++){

            if(v === 1){
                if((q === 1 && romp === 1) || q === (romp)){
                    fumSum += "*";
                } else {
                    fumSum += " ";
                }
            } else if(v === 2){
                if(q === (romp - 1)){
                    fumSum += "*";
                } else if(q === (romp + 1)){
                    fumSum += "*";
                } else {
                    fumSum += " ";
                }
            } else if(v === 3){
                if(q >= (romp - 2) && q <= (romp) ){
                    fumSum += "* ";
                } else if(q === (romp)){
                    fumSum += "*";
                } else {
                    fumSum += " ";
                }
            } else if(v === 4){
                if(q >= (romp - 3) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(v === 5){
                if(q >= (romp - 4) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(v === 6){
                if(q >= (romp - 5) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(v === 7){
                if(q >= (romp - 6) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(v === 8){
                if(q >= (romp - 7) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(v === 9){
                if(q >= (romp - 8) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(v === 10){
                if(q >= (romp - 9) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(v === 11){
                if(q >= (romp - 10) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(v === 12){
                if(q >= (romp - 11) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(v === 13){
                if(q >= (romp - 12) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(v === 14){
                if(q >= (romp - 13) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(v === 15){
                if(q >= (romp - 14) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(v === 16){
                if(q >= (romp - 15) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(v === 17){
                if(q >= (romp - 16) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(v === 18){
                if(q >= (romp - 17) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(v === 19){
                if(q >= (romp - 18) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(v === 20){
                if(q >= (romp - 19) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            }
            
        }
        
        console.log(fumSum)
        fumSum = "";
    }
    fumSum = ""
    for(let b = (romp - 1); b >= 1; b--){
        colum++;
        for(let q = 1; q <= colum; q++){

            if(b === 1){
                if((q === 1 && romp === 1) || q === (romp)){
                    fumSum += "*";
                } else {
                    fumSum += " ";
                }
            } else if(b === 2){
                if(q === (romp - 1)){
                    fumSum += "*";
                } else if(q === (romp + 1)){
                    fumSum += "*";
                } else {
                    fumSum += " ";
                }
            } else if(b === 3){
                if(q >= (romp - 2) && q <= (romp) ){
                    fumSum += "* ";
                } else if(q === (romp)){
                    fumSum += "*";
                } else {
                    fumSum += " ";
                }
            } else if(b === 4){
                if(q >= (romp - 3) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(b === 5){
                if(q >= (romp - 4) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(b === 6){
                if(q >= (romp - 5) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(b === 7){
                if(q >= (romp - 6) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(b === 8){
                if(q >= (romp - 7) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(b === 9){
                if(q >= (romp - 8) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(b === 10){
                if(q >= (romp - 9) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(b === 11){
                if(q >= (romp - 10) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(b === 12){
                if(q >= (romp - 11) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(b === 13){
                if(q >= (romp - 12) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(b === 14){
                if(q >= (romp - 13) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(b === 15){
                if(q >= (romp - 14) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(b === 16){
                if(q >= (romp - 15) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(b === 17){
                if(q >= (romp - 16) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(b === 18){
                if(q >= (romp - 17) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(b === 19){
                if(q >= (romp - 18) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            } else if(b === 20){
                if(q >= (romp - 15) && q <= (romp)){
                    fumSum += "* ";
                } else {
                    fumSum += " ";
                }
            }
            
        }
        
        console.log(fumSum)
        fumSum = "";
    }
}

rhombusOfStars(['5'])

//-\n