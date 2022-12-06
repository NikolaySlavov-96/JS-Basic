function moving(input){

    let index = 0;
    let width = Number(input[index++]);
    let length = Number(input[index++]);
    let heigh = Number(input[index++]);
    let command = input[index++];

    let sumPlace = width * length * heigh;

    while(command !== "Done"){
        let place = Number(command);
        sumPlace -= place;

        if(sumPlace < 0){
            console.log(`No more free space! You need ${Math.abs(sumPlace)} Cubic meters more.`)
            break;
        }
        command = input[index++];
    }
    if(sumPlace >= 0){
        console.log(`${sumPlace} Cubic meters left.`);
    }
}

moving(["10", 
"1",
"2",
"400", 
"6",
"Done"])
