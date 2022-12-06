function vegetableMarket (input) {

    let fruits = (input[0]);
    let vegetables = (input[1]);
    let kgFruits = (input[2]);
    let kgVegetables = (input[3]);

    let sumFruits = fruits * kgFruits;
    let sumVegetables = vegetables * kgVegetables;

    let sumPrice = (sumFruits + sumVegetables);
    let priceEuro = (sumPrice / 1.94).toFixed(2);


    console.log(priceEuro);

}

vegetableMarket(["0.194" , "19.4" , "10" , "10"]);