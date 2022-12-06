function gameOfIntervals(input){

    let index = 0;
    let moves = Number(input[index++]);
    let nextMoves = Number(input[index++]);

    let allScore = 0; 
    let firsRow = 0;
    let secondRow = 0;
    let thirdRow = 0;
    let fourthRow = 0;
    let fifthRow = 0;
    let sixthRow = 0;
    let finalScore = 0;

    for(let n = 1; n <= moves; n++){
        if(nextMoves < 0 || nextMoves > 50){
            allScore /= 2
            sixthRow++;
        } else if(nextMoves >= 0 && nextMoves <= 9){
            allScore += nextMoves * 0.20
            firsRow++;
        } else if(nextMoves <= 19){
            allScore += nextMoves * 0.30
            secondRow++;
        } else if(nextMoves <= 29){
            allScore += nextMoves * 0.40
            thirdRow++;
        } else if(nextMoves <= 39){
            allScore += 50
            fourthRow++;
        } else if(nextMoves <= 50){
            allScore += 100
            fifthRow++
        }
        nextMoves = input[index++]
    }
    console.log(`${allScore.toFixed(2)}`)
    console.log(`From 0 to 9: ${((firsRow / moves) * 100).toFixed(2)}%`)
    console.log(`From 10 to 19: ${((secondRow / moves) * 100).toFixed(2)}%`)
    console.log(`From 20 to 29: ${((thirdRow / moves) * 100).toFixed(2)}%`)
    console.log(`From 30 to 39: ${((fourthRow / moves) * 100).toFixed(2)}%`)
    console.log(`From 40 to 50: ${((fifthRow / moves) * 100).toFixed(2)}%`)
    console.log(`Invalid numbers: ${((sixthRow / moves) * 100).toFixed(2)}%`)
}

gameOfIntervals([
    '10',  '43', '57',
    '-12', '23', '12',
    '0',   '50', '40',
    '30',  '20'
  ])