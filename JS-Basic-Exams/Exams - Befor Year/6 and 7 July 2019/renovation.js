function renovation(input){

    let index = 0;
    let heightWall = Number(input[index++]);
    let widthWall = Number(input[index++]);
    let percentDontDecorate = Number(input[index++]);
    let commandDecorate = input[index++];

    let percent = (100 - percentDontDecorate) / 100;

    let allMemoryDecorate = (Math.ceil((heightWall * widthWall) * 4) * percent);

    
    while(commandDecorate !== "Tired!"){
        let decorateLitre = commandDecorate;
        if(allMemoryDecorate < decorateLitre){
            console.log(`All walls are painted and you have ${decorateLitre - allMemoryDecorate} l paint left!`)
            break;
        } else if(allMemoryDecorate > decorateLitre){
            allMemoryDecorate -= decorateLitre;
        } else if(allMemoryDecorate == decorateLitre){
            console.log(`All walls are painted! Great job, Pesho!`)
            break;
        }
        
        commandDecorate = input[index++]
        if(commandDecorate === "Tired!"){
            console.log(`${allMemoryDecorate} quadratic m left.`)
        }
    }
}

renovation(["2",
"3",
"25",
"6",
"7",
"5"])

