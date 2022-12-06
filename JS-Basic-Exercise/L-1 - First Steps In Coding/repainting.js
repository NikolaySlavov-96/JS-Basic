function repainting (input) {
    let найлон = Number(input[0]);
    let боя = Number(input[1]);
    let разредител = Number(input[2]) * 5;
    let общоЧасове = Number(input[3]);
    let торбички = Number(0.4)
    

    let найлонС = (найлон + 2 ) * 1.5;
    let бояС = (боя + (боя * 0.10)) * 14.5;
    

    let матеряли = найлонС + бояС + разредител + торбички 
    let майстори = (матеряли * 0.30) * общоЧасове
    let общо = матеряли + майстори

    console.log(общо);
}


repainting(["5" , "10" , "10" , "1"]);
