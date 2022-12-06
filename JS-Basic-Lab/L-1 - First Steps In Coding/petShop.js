function petShop (input) { 
    let хранаЗаКучета = Number(input[0]) * 2.5;
    let хранаЗаКотки = Number(input[1]) * 4;


    let крайнатаСума = хранаЗаКучета + хранаЗаКотки ;
    let results = `${крайнатаСума} lv.` ; 

    //"{крайната сума} lv."

    console.log(results);
}

petShop(["5" , "4"]) ; 