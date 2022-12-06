function oldBooks(input){

    let index = 0;
    let searchBook = input[index++];
    let bookReg = input[index++];

    let book = 0;
    let isCorrect = false;

    while(bookReg !== "No More Books"){
        if(bookReg !== ""){
            book++;
            if(bookReg === searchBook){
                console.log(`You checked ${(book - 1)} books and found it.`)
                isCorrect = true;
                break;
            }
        }
        bookReg = input[index++];
    }
    if(isCorrect === false){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${book} books.`)
    }
}

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify"])






// единия вариант е защото няма END и поради тази причина цикъла не спира || 









