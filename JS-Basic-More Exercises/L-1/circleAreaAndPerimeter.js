function circleAreaAndPerimeter (input){

 //Input 
    let r = Number(input[0]);

 //Sum
    let area = (2 * (Math.PI * r)).toFixed(2);
    let parameter = (Math.PI * (r * r)).toFixed(2); 
    

    
//Console
    console.log(parameter);
    console.log(area);
    
}

circleAreaAndPerimeter(["3"]);