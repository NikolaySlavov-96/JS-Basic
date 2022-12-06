function balls(input){

    let index = 0;
    let numberOperation = input[index++];
    let colors = input[index++];

    let totalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whileBalls = 0;
    let otherColors = 0;
    let dividesFromBlack = 0;

    for(let n = 1; n <= numberOperation; n++){
        switch(colors){
            case "red": redBalls++; totalPoints += 5; break;
            case "orange": orangeBalls++; totalPoints += 10; break;
            case "yellow": yellowBalls++; totalPoints += 15; break;
            case "white": whileBalls++; totalPoints += 20; break;
            case "black": dividesFromBlack++; Math.floor(totalPoints /= 2); break;
            default: otherColors++; break;
        }
        colors = input[index++]
    }

    console.log(`Total points: ${Math.floor(totalPoints)}`)
    console.log(`Red balls: ${redBalls}`)
    console.log(`Orange balls: ${orangeBalls}`)
    console.log(`Yellow balls: ${yellowBalls}`)
    console.log(`White balls: ${whileBalls}`)
    console.log(`Other colors picked: ${otherColors}`)
    console.log(`Divides from black balls: ${dividesFromBlack}`)
}

balls(["10",
"white",
"white",
"ee","red","orange","red","black","black","black","black"])