function divisionWithoutRemainder(input){

    let index = 0;
    let borderNumber = Number(input[index++]);
    let division = Number(input[index++]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for(let n = 1; n <= borderNumber; n++){
        if(division % 2 === 0){
            p1++;
        }
        if(division % 3 === 0){
            p2++;
        }
        if(division % 4 === 0){
            p3++;
        }
        division = Number(input[index++]);
    }   
    console.log(`${((p1 / borderNumber) * 100).toFixed(2)}%`)
    console.log(`${((p2 / borderNumber) * 100).toFixed(2)}%`)
    console.log(`${((p3 / borderNumber) * 100).toFixed(2)}%`)
}

divisionWithoutRemainder(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])
