function building(input){

    let index = 0;
    let floor = Number(input[index++]);
    let room = Number(input[index]);

    for(let i = floor; i > 0; i--){
        let buffer = "";
        for(let k = 0; k < room; k++){
           if(i === floor){
            buffer += `L${i}${k} `
        } else if(i % 2 !== 0) {
            buffer += `A${i}${k} `
        } else {
            buffer += `O${i}${k} `
        }
        }
        console.log(buffer)
    }
}

building(["6", "4"])