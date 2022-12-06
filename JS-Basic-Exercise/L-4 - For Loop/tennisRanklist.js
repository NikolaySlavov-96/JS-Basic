function tennisRanklist(input){

    let numberTours = Number(input[0]);
    let beginPoints = Number(input[1]);
    let startPoing = beginPoints;
    let wins = 0;

    for(let index = 2; index < input.length; index++){
        let final = input[index]
        switch(final){
            case "W":startPoing += 2000; wins++; break;
            case "F":startPoing += 1200; break; 
            case "SF":startPoing += 720; break;
        }
    }
    console.log(`Final points: ${startPoing}`)
    console.log(`Average points: ${Math.floor((startPoing - beginPoints) / numberTours)}`)
    console.log(`${((wins / numberTours) * 100).toFixed(2)}%`)
}
tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])
