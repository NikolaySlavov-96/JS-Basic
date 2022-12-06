function cinema(input){

    let production = input[0];
    let row = Number(input[1]);
    let colon = Number(input[2]);

    let places = row * colon; 
    price = 0.00

    if(production === "Premiere"){
        price = places * 12.00;
    } else if(production === "Normal"){
        price = places * 7.50;
    } else if(production === "Discount"){
        price = places * 5.00;
    }

    console.log(`${(price).toFixed(2)} leva.`)

}

cinema(["Discount",
"12",
"30"])
