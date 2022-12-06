function movieRatings(input){
    
    let index = 0;
    let counterFilms = Number(input[index++]);
    let nameFilm = input[index++];
    let ratingFilm = Number(input[index++]);

    let highestRatings = 0;
    let highestRatingName = "";
    let lowerRatings = 10;
    let lowerRatingsName = "";
    let averageRatings = 0;

    for(let n = 1; n <= counterFilms; n++){
        averageRatings += ratingFilm;
        if(ratingFilm > highestRatings){
            highestRatings = ratingFilm;
            highestRatingName = nameFilm;
        }
        if(ratingFilm < lowerRatings){
            lowerRatings = ratingFilm;
            lowerRatingsName = nameFilm;
        }
        nameFilm = input[index++];
        ratingFilm = Number(input[index++]);
    }
    console.log(`${highestRatingName} is with highest rating: ${(highestRatings).toFixed(1)}`)
    console.log(`${lowerRatingsName} is with lowest rating: ${(lowerRatings).toFixed(1)}`)
    console.log(`Average rating: ${(averageRatings / counterFilms).toFixed(1)}`)
}

movieRatings(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])
