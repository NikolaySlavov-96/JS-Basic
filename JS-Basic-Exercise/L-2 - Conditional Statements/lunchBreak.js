function lunchBreak(input){

  let nameSeries = input[0];
  let durationEpisode = Number(input[1]);
  let durationPause = Number(input[2]);

  let timeLaunch = (durationPause * 1) / 8;
  let timePause = (durationPause * 1) / 4;
  let resudie = durationPause - timeLaunch - timePause;
  
  let resultsTime = Math.ceil(durationEpisode - resudie);
  let resultsTimes= Math.ceil(resudie - durationEpisode);
  
  if(durationEpisode <= resudie){
    console.log(`You have enough time to watch ${nameSeries} and left with ${resultsTimes} minutes free time.`);
  } else {
    console.log(`You don't have enough time to watch ${nameSeries}, you need ${resultsTime} more minutes.`);
  }
}

lunchBreak(["Game of Thrones",
"60",
"96"])

