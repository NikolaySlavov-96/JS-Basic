function number100A200(input){

    let inport = Number(input[0]);

    if (inport < 100 ){
        console.log("Less than 100")
    } else if (inport <= 200) {
        console.log("Between 100 and 200")
    } else if ( inport > 200 ){
        console.log("Greater than 200")
    }

}

number100A200(["20"])