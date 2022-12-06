function theMostPowerfulWord(input){
    
    let index = 0;
    let inputWords = input[index++];

    let veryStrongWords = "";
    let veryStrongWordsCounter = 0;
    
    
    while(inputWords !== "End of words"){
        let isTalk = false;
        let resultWords = 0;
        let longWords = 0;
        for(let n = 0; n < inputWords.length; n++){
            resultWords += inputWords.charCodeAt(n);
            longWords++;
            if(inputWords.search(/[^a,e,i,o,u,y,A,E,I,O,U,Y]/)){
                isTalk = true;
            }
        }
        if(isTalk === true){
            resultWords *= longWords;
        } else {
            resultWords /= longWords;
        }
        if(veryStrongWordsCounter < resultWords){
            veryStrongWords = inputWords;
            veryStrongWordsCounter = resultWords;
        }
        inputWords = input[index++]
    }
    console.log(`The most powerful word is ${veryStrongWords} - ${veryStrongWordsCounter}`)
}

theMostPowerfulWord(["EThe",
"Most",
"Powerful",
"Word",
"Is",
"Experience",
"End of words"])
