function skeleton(input){
    
    let minuteToControl = Number(input[0]);
    let secantToControl = Number(input[1]);
    let longMeeters = Number(input[2]);
    let secantToHundredMeters = Number(input[3]);

    let allSecondToControl = (minuteToControl * 60 + secantToControl);
    let slow = (longMeeters / 120) * 2.5;

    let timeMartin = ((longMeeters / 100) * secantToHundredMeters) - slow

    if(allSecondToControl >= timeMartin){
        console.log(`Marin Bangiev won an Olympic quota!`)
        console.log(`His time is ${(timeMartin).toFixed(3)}.`)
    } else {
        console.log(`No, Marin failed! He was ${(timeMartin - allSecondToControl).toFixed(3)} second slower.`)
    }
}

skeleton(["2",
"12",
"1200",
"10"])
