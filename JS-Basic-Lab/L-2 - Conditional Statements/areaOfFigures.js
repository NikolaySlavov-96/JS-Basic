function areaOfFigures(input){

    let text = (input[0]);
    let num1 = Number(input[1]);
    let num2 = Number(input[2]);
    let result = 0; 

    if (text === "square"){
        result = num1 * num1; 
    } else if ( text === "rectangle"){
        result = num1 * num2;
    } else if (text === "circle"){
        result = Math.PI * Math.pow(num1,2);
    } else {
        result = num1 * num2 / 2 
    }


    console.log(result.toFixed(3));
}

areaOfFigures(["triangle","4.5","20"])


