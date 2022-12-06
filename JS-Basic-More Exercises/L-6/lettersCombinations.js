function lettersCombinations(input){

    let first = input[0];
    let second = input[1];
    let third = input[2];

    let one = 0;
    let two = 0;
    let three = 0;

    let combination = "";
    let qualityCombination = 0;

    switch(first){
        case "a": one = 1; break;
        case "b": one = 2; break;
        case "c": one = 3; break;
        case "d": one = 4; break;
        case "e": one = 5; break;
        case "f": one = 6; break;
        case "g": one = 7; break;
        case "h": one = 8; break;
        case "i": one = 9; break;
        case "j": one = 10; break;
        case "k": one = 11; break;
        case "l": one = 12; break;
        case "m": one = 13; break;
        case "n": one = 14; break;
        case "o": one = 15; break;
        case "p": one = 16; break;
        case "q": one = 17; break;
        case "r": one = 18; break;
        case "s": one = 19; break;
        case "t": one = 20; break;
        case "u": one = 21; break;
        case "v": one = 22; break;
        case "w": one = 23; break;
        case "x": one = 24; break;
        case "y": one = 25; break;
        case "z": one = 26; break;
    }
    switch(second){
        case "a": two = 1; break;
        case "b": two = 2; break;
        case "c": two = 3; break;
        case "d": two = 4; break;
        case "e": two = 5; break;
        case "f": two = 6; break;
        case "g": two = 7; break;
        case "h": two = 8; break;
        case "i": two = 9; break;
        case "j": two = 10; break;
        case "k": two = 11; break;
        case "l": two = 12; break;
        case "m": two = 13; break;
        case "n": two = 14; break;
        case "o": two = 15; break;
        case "p": two = 16; break;
        case "q": two = 17; break;
        case "r": two = 18; break;
        case "s": two = 19; break;
        case "t": two = 20; break;
        case "u": two = 21; break;
        case "v": two = 22; break;
        case "w": two = 23; break;
        case "x": two = 24; break;
        case "y": two = 25; break;
        case "z": two = 26; break;
    }
    switch(third){
        case "a": three = 1; break;
        case "b": three = 2; break;
        case "c": three = 3; break;
        case "d": three = 4; break;
        case "e": three = 5; break;
        case "f": three = 6; break;
        case "g": three = 7; break;
        case "h": three = 8; break;
        case "i": three = 9; break;
        case "j": three = 10; break;
        case "k": three = 11; break;
        case "l": three = 12; break;
        case "m": three = 13; break;
        case "n": three = 14; break;
        case "o": three = 15; break;
        case "p": three = 16; break;
        case "q": three = 17; break;
        case "r": three = 18; break;
        case "s": three = 19; break;
        case "t": three = 20; break;
        case "u": three = 21; break;
        case "v": three = 22; break;
        case "w": three = 23; break;
        case "x": three = 24; break;
        case "y": three = 25; break;
        case "z": three = 26; break;
    }
    for(let n = one; n <= two; n++){
        for(let m = one; m <= two; m++){
            for(let q = one; q <= two; q++){
                if(n !== three && m !== three && q !== three){
                    qualityCombination++;
                    switch(n){
                        case 1: ns = "a"; break;
                        case 3: ns = "c"; break;
                        case 2: ns = "b"; break;
                        case 5: ns = "e"; break;
                        case 4: ns = "d"; break;
                        case 6: ns = "f"; break;
                        case 7: ns = "g"; break;
                        case 8: ns = "h"; break;
                        case 9: ns = "i"; break;
                        case 10: ns = "j"; break;
                        case 11: ns = "k"; break;
                        case 12: ns = "l"; break;
                        case 13: ns = "m"; break;
                        case 14: ns = "n"; break;
                        case 15: ns = "o"; break;
                        case 16: ns = "p"; break;
                        case 17: ns = "q"; break;
                        case 18: ns = "r"; break;
                        case 19: ns = "s"; break;
                        case 20: ns = "t"; break;
                        case 21: ns = "u"; break;
                        case 22: ns = "v"; break;
                        case 23: ns = "w"; break;
                        case 24: ns = "x"; break;
                        case 25: ns = "y"; break;
                        case 26: ns = "z"; break;
                    }
                    switch(m){
                        case 1: ms = "a"; break;
                        case 2: ms = "b"; break;
                        case 3: ms = "c"; break;
                        case 4: ms = "d"; break;
                        case 5: ms = "e"; break;
                        case 6: ms = "f"; break;
                        case 7: ms = "g"; break;
                        case 8: ms = "h"; break;
                        case 9: ms = "i"; break;
                        case 10: ms = "j"; break;
                        case 11: ms = "k"; break;
                        case 12: ms = "l"; break;
                        case 13: ms = "m"; break;
                        case 14: ms = "n"; break;
                        case 15: ms = "o"; break;
                        case 16: ms = "p"; break;
                        case 17: ms = "q"; break;
                        case 18: ms = "r"; break;
                        case 19: ms = "s"; break;
                        case 20: ms = "t"; break;
                        case 21: ms = "u"; break;
                        case 22: ms = "v"; break;
                        case 23: ms = "w"; break;
                        case 24: ms = "x"; break;
                        case 25: ms = "y"; break;
                        case 26: ms = "z"; break;
                    }
                    switch(q){
                        case 1: qs = "a"; break;
                        case 2: qs = "b"; break;
                        case 3: qs = "c"; break;
                        case 4: qs = "d"; break;
                        case 5: qs = "e"; break;
                        case 6: qs = "f"; break;
                        case 7: qs = "g"; break;
                        case 8: qs = "h"; break;
                        case 9: qs = "i"; break;
                        case 10: qs = "j"; break;
                        case 11: qs = "k"; break;
                        case 12: qs = "l"; break;
                        case 13: qs = "m"; break;
                        case 14: qs = "n"; break;
                        case 15: qs = "o"; break;
                        case 16: qs = "p"; break;
                        case 17: qs = "q"; break;
                        case 18: qs = "r"; break;
                        case 19: qs = "s"; break;
                        case 20: qs = "t"; break;
                        case 21: qs = "u"; break;
                        case 22: qs = "v"; break;
                        case 23: qs = "w"; break;
                        case 24: qs = "x"; break;
                        case 25: qs = "y"; break;
                        case 26: qs = "z"; break;
                    }
                    combination += (`${ns}${ms}${qs} `)
                }
            }
        }
    }
    console.log(`${combination}${qualityCombination}`)
}

lettersCombinations(["a" , "c" , "b"])