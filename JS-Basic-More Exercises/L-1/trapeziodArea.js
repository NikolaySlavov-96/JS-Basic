function trapeziodArea (input) { 
    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);

    let sumFace = (b1 + b2) * h / 2; 
    let face = sumFace.toFixed(2);

    console.log(face);

}

trapeziodArea(["20" , "30" , "7"]);