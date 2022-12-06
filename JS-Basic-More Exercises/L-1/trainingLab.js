function trainingLab (input) {

    let long = Number(input[0]);
    let wide = Number(input[1]);

    //Ограничения: 3 ≤ h ≤ w ≤ 100

    let wideHall = wide - 1
    let desk = wideHall / 0.7
    let deskWideSum = Math.floor(desk)

    let longHall = long / 1.2
    let deskLongSum = Math.floor(longHall)

    let sump = deskWideSum * deskLongSum - 3

    console.log(sump)
}

trainingLab(["8.4" , "5.2"]);


//Вход: 15 8.9	
//Изход: 129

//Вход: 8.4 5.2	
//Изход: 39
