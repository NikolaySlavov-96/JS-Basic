function easterShop(input){

    let index = 0;
    let beginEggs = Number(input[index++]);
    let command = input[index++];
    let quality = Number(input[index++]);

    let isBullet = false;
    let sollEggs = 0;

    while(command !== "Close"){
        if(quality > beginEggs && command !== "Fill"){
            console.log(`Not enough eggs in store!`);
            console.log(`You can buy only ${beginEggs}.`)
            break;
        }
        switch(command){
            case "Buy": beginEggs -= quality; sollEggs += quality; break;
            case "Fill": beginEggs += quality; break;
        }
        command = input[index++];
        quality = Number(input[index++])
        if(command === "Close"){
            isBullet = true;
        }
    }
    if(isBullet === true){
        console.log(`Store is closed!`)
        console.log(`${sollEggs} eggs sold.`)
    }
}

easterShop(["20",
"Fill",
"30",
"Buy",
"15",
"Buy",
"20",
"Close"])

