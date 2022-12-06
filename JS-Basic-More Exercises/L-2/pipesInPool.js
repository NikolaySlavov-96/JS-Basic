function pipesInPool(input){

    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let sumP1 = h * p1;
    let sumP2 = h * p2;
    let sumPorcent = (((sumP1 + sumP2) / v) * 100).toFixed(2);

    let firstPipe = ((sumP1 / (sumP1 + sumP2)) * 100).toFixed(2);
    let secondPipe = ((sumP2 / (sumP1 + sumP2)) * 100).toFixed(2);


    if (v >= (sumP1 + sumP2)){ 
        console.log(`The pool is ${sumPorcent}% full. Pipe 1: ${firstPipe}%. Pipe 2: ${secondPipe}%.`)
    } else {
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${((sumP1 + sumP2) - v).toFixed(2)} liters.`)
    }
}

pipesInPool(["230" , "110" , "70" , "1"]);