function cake(input){

    let index = 0
    let width = Number(input[index++]);
    let heigh = Number(input[index++]);
    let command = input[index++];

    let cakeSumPr = width * heigh;
    let buff = cakeSumPr;

    while(command !== "STOP"){
        let cakess = Number(command);
        

        cakeSumPr -= cakess;

        if(cakeSumPr <= 0){
            break;
        }
        command = input[index++];
    }
    if(cakeSumPr > 0){
        console.log(`${cakeSumPr} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${Math.abs(cakeSumPr)} pieces more.`)
    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])



