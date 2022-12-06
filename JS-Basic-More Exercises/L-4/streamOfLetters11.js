function streamOfLetters(input){

    let index = 0; 
    let command = input[index++];
    
    let wordPrint = "";
    let word = "";
  
    let numberWordN = 0;
    let numberWordC = 0;
    let numberWordO = 0;
  
    while(command !== "End"){
      let letter = command.replace(/[^a-zA-Z0-9 ]/g, '');
      if(letter === ""){
        command = input[index++];
        continue;
      }
      if(letter === "n" || letter === "c" || letter === "o"){
        if(letter === "n"){
          if(numberWordN === 1){
            wordPrint += letter;
            numberWordN = 0;
          } else if(numberWordN === 0) {
            word += letter + " "
            numberWordN++
          }
        } else if(letter === "c"){
          if(numberWordC === 1){
            wordPrint += letter;
            numberWordC = 0;
          } else if(numberWordC === 0) {
            word += letter + " "
            numberWordC++;
          }
        } else if(letter === "o"){
          if(numberWordO === 1){
            wordPrint += letter;
            numberWordO = 0;
          } else if(numberWordO === 0) {
            word += letter + " " 
            numberWordO++;
          }
        }
      } else {
        wordPrint += letter;
      }
      command = input[index++];
  
      if(numberWordC === 1 && numberWordN === 1 && numberWordO === 1){
        break;
      }
  
      if(word === "n o c "){
        word = "";
        wordPrint += " ";
        numberWordN = 0;
        numberWordC = 0;
        numberWordO = 0;
      }
     
    }
    console.log(wordPrint)
  }
  streamOfLetters([
    '%', '!',   'c',  '^',
    'B', '`',   'o',  '%',
    'o', 'o',   'M',  ')',
    '{', 'n',   '\\', 'A',
    'D', 'End'
  ])