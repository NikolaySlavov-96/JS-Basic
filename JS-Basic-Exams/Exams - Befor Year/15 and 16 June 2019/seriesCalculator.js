function seriesCalculator(input){

    let nameFilm = input[0];
    let qualitySeason = Number(input[1]);
    let qualityEpisode = Number(input[2]);
    let longTimeOneEpisode = Number(input[3]);

    let timeLongOneEpisode = longTimeOneEpisode + (longTimeOneEpisode * 0.20)

    let addTimeToEndEpisode = qualitySeason * 10;

    let allTimeToWatchFilm = ((qualityEpisode * timeLongOneEpisode) * qualitySeason) + addTimeToEndEpisode

    console.log(`Total time needed to watch the ${nameFilm} series is ${(Math.round(allTimeToWatchFilm))} minutes.`)
}

seriesCalculator(["Lucifer",
"3",
"19",
"55"])
