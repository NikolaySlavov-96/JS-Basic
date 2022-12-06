function touristShop(input){

    let index = 0;
    let budget = Number(input[index++]);
    let command = input[index++];

    let need = budget

    let payMoney = 0;

    let buyProduct = 0;

    while(command !== "Stop"){
        let nameProduct = command;
        let priceProduct = Number(input[index++]);

        buyProduct++;
        if(buyProduct % 3 === 0){
            priceProduct /= 2;
        }

        payMoney += priceProduct;
        budget -= priceProduct;
        
        if(budget < 0){
            console.log(`You don't have enough money!`)
            console.log(`You need ${(payMoney - need).toFixed(2)} leva!`)
            break;
        }


        command = input[index++];
        nameProduct = command

        if(command === "Stop"){
            console.log(`You bought ${buyProduct} products for ${(payMoney).toFixed(2)} leva.`)
        }
    }
}

touristShop(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"])