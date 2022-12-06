function footballResults(input){

    let index = 0;
    let first = input[index++];

    let win = 0;
    let lost = 0;
    let equal = 0;

    for(let n = 1; n <= 3; n++){
        let result = 0;
        let firstTeam = 0;
        let secondTeam = 0;
        for(let q = 0; q < first.length; q++){
            result++;
            let search = first[q]
            if(result === 1){
                firstTeam = search
            } else if(result === 3) {
                secondTeam = search
            }
        }
        first = input[index++]
        if(firstTeam > secondTeam){
            win++;
        } else if(firstTeam === secondTeam){
            equal++;
        } else if(firstTeam < secondTeam){
            lost++;
        }
    }
    console.log(`Team won ${win} games.`)
    console.log(`Team lost ${lost} games.`)
    console.log(`Drawn games: ${equal}`)
}

footballResults(["3:1",
"0:1",
"0:0"])
