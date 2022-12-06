function movieDay(input){

    let timeToCapture = Number(input[0]);
    let qualityTake = Number(input[1]);
    let timeToScene = Number(input[2]);

    let fieldPreparation = timeToCapture * 0.15;
    let captureScene = (qualityTake * timeToScene) + fieldPreparation;

    if(timeToCapture <= captureScene){
        console.log(`Time is up! To complete the movie you need ${Math.round(captureScene - timeToCapture)} minutes.`)
    } else {
        console.log(`You managed to finish the movie on time! You have ${Math.round(timeToCapture - captureScene)} minutes left!`)
    }
}

movieDay(["60",
"15",
"3"])


