function giftsFromSanta(input){

    let N = Number(input[0]);
    let M = Number(input[1]);
    let S = Number(input[2]);

    let buffer = "";

    for(let i = M; i >= N; i--){
        if(i % 2 === 0 && i % 3 === 0){
            if(i === S){
                break;
            }
            buffer += (`${i} `)
        }
    }
    console.log(buffer)
}

giftsFromSanta(["1",
"30",
"12"]);
