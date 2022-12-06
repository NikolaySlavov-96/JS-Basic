function passwordGenerator(input){

    let numberN = Number(input[0]);
    let numberL = Number(input[1]);

    let ra = "";
    let wa = "";
    let printSum = "";
    
    for(let n = 1; n < numberN; n++){
        for(let q = 1; q < numberN; q++){
            for(let r = 1; r <= numberL; r++){
                for(let w = 1; w <= numberL; w++){
                    for(let x = 1; x <= numberN; x++){
                        if(x > n && x > q){
                            switch(r){
                                case 1: ra = "a"; break;
                                case 2: ra = "b"; break;
                                case 3: ra = "c"; break;
                                case 4: ra = "d"; break;
                                case 5: ra = "e"; break;
                                case 6: ra = "f"; break;
                                case 7: ra = "g"; break;
                                case 8: ra = "h"; break;
                                case 9: ra = "i"; break;
                                case 10: ra = "j"; break;
                                case 11: ra = "k"; break;
                                case 12: ra = "l"; break;
                                case 13: ra = "m"; break;
                                case 14: ra = "n"; break;
                                case 15: ra = "o"; break; 
                                case 16: ra = "p"; break; 
                                case 17: ra = "q"; break;
                                case 18: ra = "r"; break;
                                case 19: ra = "s"; break;
                                case 20: ra = "t"; break;
                                case 21: ra = "u"; break;
                                case 22: ra = "v"; break;
                                case 23: ra = "w"; break;
                                case 24: ra = "x"; break;
                                case 25: ra = "y"; break;
                                case 26: ra = "z"; break;
                            }
                            switch(w){
                                case 1: wa = "a"; break;
                                case 2: wa = "b"; break;
                                case 3: wa = "c"; break;
                                case 4: wa = "d"; break;
                                case 5: wa = "e"; break;
                                case 6: wa = "f"; break;
                                case 7: wa = "g"; break;
                                case 8: wa = "h"; break;
                                case 9: wa = "i"; break;
                                case 10: wa = "j"; break;
                                case 11: wa = "k"; break;
                                case 12: wa = "l"; break;
                                case 13: wa = "m"; break;
                                case 14: wa = "n"; break;
                                case 15: wa = "o"; break; 
                                case 16: wa = "p"; break; 
                                case 17: wa = "q"; break;
                                case 18: wa = "r"; break;
                                case 19: wa = "s"; break;
                                case 20: wa = "t"; break;
                                case 21: wa = "u"; break;
                                case 22: wa = "v"; break;
                                case 23: wa = "w"; break;
                                case 24: wa = "x"; break;
                                case 25: wa = "y"; break;
                                case 26: wa = "z"; break;
                            }
                            printSum += (`${n}${q}${ra}${wa}${x} `)
                        }
                    }
                }
            }
        }
    }
    console.log(printSum)
}

passwordGenerator(['2' , '4'])