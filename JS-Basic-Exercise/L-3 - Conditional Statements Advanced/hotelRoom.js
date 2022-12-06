function hotelRoom(input){

    let month = input[0];
    let days = Number(input[1]);
    let studio = 0;
    let apartmant = 0;

    if(month === "May" || month === "October"){
        apartmant = 65;
        studio = 50;
        if(days > 14){
            apartmant = 65 * 0.90
        }
        if(days > 14){
            studio = 50 * 0.70
        } else if(days > 7 ){
            studio = 50 * 0.95
        }
    } else if(month ==="June" || month === "September"){
        apartmant = 68.70;
        studio = 75.20;
        if(days >14){
            apartmant = 68.70 * 0.90
        }
        if(days > 14){
            studio = 75.20 * 0.80
        }
    } else if(month === "July" || month === "August"){
        apartmant = 77
        studio = 76;
            if(days > 14){
                apartmant = 77 * 0.90
            } 
    }
    console.log(`Apartment: ${(days * apartmant).toFixed(2)} lv.`)
    console.log(`Studio: ${(days * studio).toFixed(2)} lv.`)
}

hotelRoom(["May",
"15"])
