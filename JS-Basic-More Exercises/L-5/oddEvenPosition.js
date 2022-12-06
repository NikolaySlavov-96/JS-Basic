function oddEvenPosition(input){
    
    let index = 0;
    let qualityLoop = Number(input[index++]);
    let inputNumbers = Number(input[index++]);

    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;

    let EvenSum = 0;
    let EvenMin = Number.MAX_SAFE_INTEGER;
    let EvenMax = Number.MIN_SAFE_INTEGER;
    

    for(let n = 1; n <= qualityLoop; n++){
        if(inputNumbers % 2 === 0) {
            EvenSum += Number(inputNumbers);
            if(inputNumbers < EvenMin){
                EvenMin = inputNumbers;
            }
            if(inputNumbers > EvenMax){
                EvenMax = inputNumbers;
            }
        } else {
            oddSum += Number(inputNumbers);
            if(inputNumbers < oddMin){
                oddMin = inputNumbers;
            }
            if(inputNumbers > oddMax){
                oddMax = inputNumbers;
            }
        }
        inputNumbers = Number(input[index++]);
    }
    if(oddMin === Number.MAX_SAFE_INTEGER){
        oddMin = "No"
    }
    if(oddMax === Number.MIN_SAFE_INTEGER){
        oddMax = "No"
    }
    if(EvenMin === Number.MAX_SAFE_INTEGER){
        EvenMin = "No"
    }
    if(EvenMax === Number.MIN_SAFE_INTEGER){
        EvenMax = "No"
    }

    console.log(`OddSum=${(oddSum).toFixed(2)},`)

    if(oddMin !== "No"){
        console.log(`OddMin=${(oddMin).toFixed(2)},`)
    } else {
        console.log("OddMin=No,")
    }

    if(oddMax !== "No"){
        console.log(`OddMax=${(oddMax).toFixed(2)},`)
    } else {
        console.log("OddMax=No,")
    }
    
    console.log(`EvenSum=${(EvenSum).toFixed(2)},`)
    
    if(EvenMin !== "No"){
        console.log(`EvenMin=${(EvenMin).toFixed(2)},`)
    } else {
        console.log("EvenMin=No,")
    }
    if(EvenMax !== "No"){
        console.log(`EvenMax=${(EvenMax).toFixed(2)}`)
    } else {
        console.log("EvenMax=No")
    }
}

oddEvenPosition(['2' , '1.5' , '-2.5'])

//(['6' , '2' , '3' , '5' , '4' , '2' , '1'])
//(['5' , '3' , '-2' , '8' , '11' , '-3'])
//(['2' , '1.5' , '-2.5'])
//(['1' , '1'])