function trekkingMania(input){

    let groups = Number(input[0]);
    let Musala = 0;
    let Monblan = 0;
    let Kilimandgaro = 0;
    let K2 = 0;
    let Everest = 0;

    for(let i = 1; i <= groups; i++){

        let groupNumbers = Number(input[i]);

        if(groupNumbers <= 5){
            Musala += groupNumbers;
        } else if(groupNumbers <= 12){
            Monblan += groupNumbers;
        } else if(groupNumbers <= 25){
            Kilimandgaro += groupNumbers;
        } else if(groupNumbers <= 40){
            K2 += groupNumbers;
        } else if(groupNumbers >= 41){
            Everest += groupNumbers;
        }
    }
    let sumGroup = Musala + Monblan + Kilimandgaro + K2 + Everest
    
    console.log(`${(Musala / sumGroup * 100).toFixed(2)}%`);
    console.log(`${(Monblan / sumGroup * 100).toFixed(2)}%`);
    console.log(`${(Kilimandgaro / sumGroup * 100).toFixed(2)}%`);
    console.log(`${(K2 / sumGroup * 100).toFixed(2)}%`);
    console.log(`${(Everest / sumGroup * 100).toFixed(2)}%`);
}
trekkingMania(["10","10","5","1","100","12","26","17","37","40","78"]);