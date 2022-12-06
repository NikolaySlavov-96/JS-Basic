function cinemaVoucher(input){

    let index = 0;
    let valueVoucher = input[index++];
    let command = input[index++];

    let films = 0;
    let other = 0;
    
    while(command !== "End"){
        let pay = 0;
        let sizeName = 0;
        let firstSymbol = "";
        let secondSymbol = "";
        for(let n = 0; n < command.length; n++){
            sizeName++;
            if(n === 0){
                firstSymbol = command.charCodeAt(n);
            } else if(n === 1){
                secondSymbol = command.charCodeAt(n);
            }
        }
        if(sizeName > 8){
            pay = firstSymbol + secondSymbol
            if(valueVoucher >= pay){
                films++;
                valueVoucher -= firstSymbol + secondSymbol;
                pay = 0;
            }
        } else if(sizeName <= 8){
            pay = firstSymbol;
            if(valueVoucher >= pay){
                other++;
                valueVoucher -= firstSymbol;
                pay = 0;
            }
        }
        if(valueVoucher <= pay){
            break;
        }
        command = input[index++];
    }
    console.log(films)
    console.log(other)
}

cinemaVoucher(["300",
"Captain Marvel",
"popcorn",
"Pepsi"])

