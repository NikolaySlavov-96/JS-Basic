function easterDecoration(input){

    let index = 0;
    let qualityPeopleInShop = Number(input[index++]);
    let command = input[index++];

    let allPayPrice = 0;

    for(let n = 0; n < qualityPeopleInShop; n++){
        let payPrice = 0;
        let qualityBuyArt = 0;
        let buyProduct = 0;
        while(command !== "Finish"){
            switch(command){
                case "basket": qualityBuyArt++; buyProduct++; payPrice += 1.50; break;
                case "wreath": qualityBuyArt++; buyProduct++; payPrice += 3.80; break;
                case "chocolate bunny": qualityBuyArt++; buyProduct++; payPrice += 7; break;
            }
            command = input[index++];
            if(command === "Finish" && buyProduct % 2 === 0){
                payPrice *= 0.80;
            }
            if(command === "Finish"){
                console.log(`You purchased ${qualityBuyArt} items for ${(payPrice).toFixed(2)} leva.`)
                allPayPrice += payPrice;
            }
        }
        command = input[index++]
    }
    console.log(`Average bill per client is: ${(allPayPrice / qualityPeopleInShop).toFixed(2)} leva.`)
}

easterDecoration(["2",
"basket",
"wreath",
"chocolate bunny",
"Finish",
"wreath",
"chocolate bunny",
"Finish"])
