function weddingSeats(input){

    let sector = input[0];
    let allRowFirstSector = Number(input[1]);
    let qualityPlaceOddRow = Number(input[2]);

    let pleaseSet = 0;
    let addRow = 0;
    let sums = 0;
    
    let wordFirst = "";
    let wordThird = "";

    if(sector === "A"){
        sectors = 1;
    } else if(sector === "B"){
        sectors = 2;
    } else if(sector === "C"){
        sectors = 3;
    } else if(sector === "D"){
        sectors = 4;
    } else if(sector === "E"){
        sectors = 5;
    } else if(sector === "F"){
        sectors = 6 ;
    } else if(sector === "G"){
        sectors = 7 ;
    } else if(sector === "H"){
        sectors = 8 ;
    } else if(sector === "I"){
        sectors = 9 ;
    } else if(sector === "J"){
        sectors = 10;
    } else if(sector === "K"){
        sectors = 11;
    }  else if(sector === "L"){
        sectors = 12;
    } else if(sector === "M"){
        sectors = 13;
    } else if(sector === "N"){
        sectors = 14;
    } else if(sector === "O"){
        sectors = 15;
    } else if(sector === "P"){
        sectors = 16;
    } else if(sector === "Q"){
        sectors = 17;
    } else if(sector === "R"){
        sectors = 18;
    } else if(sector === "S"){
        sectors = 19;
    } else if(sector === "T"){
        sectors = 20;
    } else if(sector === "U"){
        sectors = 21;
    } else if(sector === "V"){
        sectors = 22;
    } else if(sector === "W"){
        sectors = 23;
    } else if(sector === "X"){
        sectors = 24;
    } else if(sector === "Y"){
        sectors = 25;
    } else if(sector === "Z"){
        sectors = 26;
    }

    for(let n = 1; n <= sectors; n++){
        for(let g = 1; g <= allRowFirstSector; g++){
            if(g % 2 === 0){
                qualityPlaceOddRow += Number(2)
                sums = qualityPlaceOddRow
            } else {
                qualityPlaceOddRow = Number(input[2])
            }
            for(let r = 1; r <= qualityPlaceOddRow; r++){
                
                if(n === 1){
                    wordFirst = "A";
                } else if(n === 2){
                    wordFirst = "B";
                } else if(n === 3){
                    wordFirst = "C";
                } else if(n === 4){
                    wordFirst = "D";
                } else if(n === 5){
                    wordFirst = "E";
                } else if(n === 6){
                    wordFirst = "F";
                } else if(n === 7){
                    wordFirst = "G";
                } else if(n === 8){
                    wordFirst = "H";
                } else if(n === 9){
                    wordFirst = "I";
                } else if(n === 10){
                    wordFirst = "J";
                } else if(n === 11){
                    wordFirst = "K";
                } else if(n === 12){
                    wordFirst = "L";
                } else if(n === 13){
                    wordFirst = "M";
                } else if(n === 14){
                    wordFirst = "N";
                } else if(n === 15){
                    wordFirst = "O";
                } else if(n === 16){
                    wordFirst = "P";
                } else if(n === 17){
                    wordFirst = "Q";
                } else if(n === 18){
                    wordFirst = "R";
                } else if(n === 19){
                    wordFirst = "S";
                } else if(n === 20){
                    wordFirst = "T";
                } else if(n === 21){
                    wordFirst = "U";
                } else if(n === 22){
                    wordFirst = "V";
                } else if(n === 23){
                    wordFirst = "W";
                } else if(n === 24){
                    wordFirst = "X";
                } else if(n === 25){
                    wordFirst = "Y";
                } else if(n === 26){
                    wordFirst = "Z";
                }
                switch(r){
                    case 1: wordThird = "a"; break;
                    case 2: wordThird = "b"; break;
                    case 3: wordThird = "c"; break;
                    case 4: wordThird = "d"; break;
                    case 5: wordThird = "e"; break;
                    case 6: wordThird = "f"; break;
                    case 7: wordThird = "g"; break;
                    case 8: wordThird = "h"; break;
                    case 9: wordThird = "i"; break;
                    case 10: wordThird = "j"; break;
                    case 11: wordThird = "k"; break;
                    case 12: wordThird = "l"; break;
                    case 13: wordThird = "m"; break;
                    case 14: wordThird = "n"; break;
                    case 15: wordThird = "o"; break;
                    case 16: wordThird = "p"; break;
                    case 17: wordThird = "q"; break;
                    case 18: wordThird = "r"; break;
                    case 19: wordThird = "s"; break;
                    case 20: wordThird = "t"; break;
                    case 21: wordThird = "u"; break;  
                    case 22: wordThird = "v"; break;
                    case 23: wordThird = "w"; break;   
                    case 24: wordThird = "x"; break;
                    case 25: wordThird = "z"; break;
                }
                console.log(`${wordFirst}${g}${wordThird}`)
                pleaseSet++;
            }
            if(n >= 2){
                addRow++;
                    if(addRow === 1){
                        allRowFirstSector++;
                    }
            }
        }
        addRow = 0;
        addRowSectorThird = 0;
    }
    console.log(pleaseSet)
}

weddingSeats(["E" , "1" , "3"])



//if(r === 1){
//    wordThird = "a"
//} else if(r === 2){
//    wordThird = "b"
//} else if(r === 3){
//    wordThird = "c"
//} else if(r === 4){
//    wordThird = "d"
//} else if(r === 5){
//    wordThird = "e"
//} else if(r === 6){
//
//} else if(r === 7){
//
//} else 