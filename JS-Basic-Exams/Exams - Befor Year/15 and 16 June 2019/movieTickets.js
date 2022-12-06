function movieTickets(input){

    let firstA = Number(input[0]);
    let secondA = Number(input[1]);
    let wordN = Number(input[2]);

    let symbolFirst = "";

    for(let n = firstA; n <= (secondA - 1); n++){
            symbolFirst = String.fromCharCode(n);
        
        for(let s2 = 1; s2 <= (wordN - 1); s2++){
            for(let s3 = 1; s3 <= (wordN / 2 - 1); s3++){
                if((s2 + s3 + n) % 2 !== 0 && (n % 2 !== 0)){
                    console.log(`${symbolFirst}-${s2}${s3}${n}`)
                }
            }
        }
        
    }
}

movieTickets(["65",
"91",
"10"])