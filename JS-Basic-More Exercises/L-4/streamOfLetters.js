function streamOfLetters(input){

  let index = 0; 
  let command = input[index++];
  
  let wordPrint = "";
  let word = "";

  let numberWordN = 0;
  let numberWordC = 0;
  let numberWordO = 0;

  let prints = "";
  let isTrueN = 0;
  let isTrueO = 0;
  let isTrueC = 0;
  
  let search = "";
  let isGlow = false;

  while(command !== "End"){
    
    let letter = command.replace(/[^a-zA-Z0-9 ]/g, '');
    if(letter === ""){
      command = input[index++];
      continue;
    }
    if(isGlow === true){
      break;
    }
    if(letter === "n" || letter === "c" || letter === "o"){
      if(letter === "n"){
        if(numberWordN !== 0){
          wordPrint += letter;
          numberWordN++;
        } else if(numberWordN % 2 === 0) {
          word += letter
          numberWordN++
        }
      } else if(letter === "c"){
        if(numberWordC !== 0){
          wordPrint += letter;
          numberWordC++;
        } else if(numberWordC % 2 === 0) {
          word += letter
          numberWordC++;
        }
      } else if(letter === "o"){
        if(numberWordO !== 0){
          wordPrint += letter;
          numberWordO++;
        } else if(numberWordO % 2 === 0) {
          word += letter
          numberWordO++;
        }
      }
    } else {
      wordPrint += letter;
    }
    for(let n = 0; n <= word.length; n++){
      search = word[n]
      if(search === "n" && (numberWordN === 1 && numberWordN <= 2)){
        isTrueN++;
      } else if(search === "o" && numberWordO === 1 && numberWordN <= 2){
        isTrueO++;
      } else if(search === "c" && numberWordC === 1 && numberWordN <= 2){
        isTrueC++;
      }
    }
    if(isTrueN !== 0 && isTrueO !== 0 && isTrueC !== 0){
      prints += wordPrint + " ";
      numberWordN = 0;
      numberWordC = 0;
      numberWordO = 0;
      isTrueN = 0;
      isTrueO = 0;
      isTrueC = 0;
      wordPrint = "";
    }
    command = input[index++];
  }
  console.log(prints)
}

streamOfLetters([
  '%', '!',   'c',  '^',
  'B', '`',   'o',  '%',
  'o', 'o',   'M',  ')',
  '{', 'n',   '\\', 'A',
  'D', 'End'
])