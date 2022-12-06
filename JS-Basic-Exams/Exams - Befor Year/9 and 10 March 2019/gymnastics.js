function gymnastics(input){

    let country = input[0];
    let device = input[1];

    let price = 0;

    switch(country){
        case "Russia":
            switch(device){
                case "ribbon": price = 9.100 + 9.400; break;
                case "hoop": price = 9.300 + 9.800; break;
                case "rope": price = 9.600 + 9.000; break;
            }
        break;
        case "Bulgaria":
            switch(device){
                case "ribbon": price = 9.600 + 9.400; break;
                case "hoop": price = 9.550 + 9.750; break;
                case "rope": price = 9.500 + 9.400; break;
            }
        break;
        case "Italy":
            switch(device){
                case "ribbon": price = 9.200 + 9.500; break;
                case "hoop": price = 9.450 + 9.350; break;
                case "rope": price = 9.700 + 9.150; break;
            }
        break;
    }
    console.log(`The team of ${country} get ${(price).toFixed(3)} on ${device}.`)
    console.log(`${(((20 - price) / 20) * 100).toFixed(2)}%`)
}

gymnastics(["Bulgaria",
"ribbon"])
