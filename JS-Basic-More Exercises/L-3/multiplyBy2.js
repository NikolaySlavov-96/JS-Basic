function multiplyBy2(input){


    for(let i = 0; i < input.length; i++){
        let currentTab = input[i]
        if(currentTab < 0){
            console.log("Negative number!")
            break;
        }

        console.log(`Result: ${(currentTab * 2).toFixed(2)}`)
    }
    
}
multiplyBy2(["23.43","12.3245","0","65.23432","23","65","-12"]);