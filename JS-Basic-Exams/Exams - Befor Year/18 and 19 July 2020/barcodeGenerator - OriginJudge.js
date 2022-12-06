function barcodeGenerator(input){
    
    let firstBarcode = input[0];
    let secondBarcode = input[1];
    
    let firstFirsNumber = "";
    let firstSecondNumber = "";
    let firstTherdNumber = "";
    let firstFourNumber = "";

    let secondFirstNumber = "";
    let secondSecondNumber = "";
    let secondTherdNumber = "";
    let secondFourNumber = "";

    let barcode = "";

    for(let n = 0; n < firstBarcode.length; n++){
        firstFirsNumber = (firstBarcode[0])
        firstSecondNumber = (firstBarcode[1])
        firstTherdNumber = (firstBarcode[2])
        firstFourNumber = (firstBarcode[3])
    }
    for(let w = 0; w < secondBarcode.length; w++){
        secondFirstNumber = (secondBarcode[0])
        secondSecondNumber = (secondBarcode[1])
        secondTherdNumber = (secondBarcode[2])
        secondFourNumber = (secondBarcode[3])
    }

    for(let v = firstFirsNumber; v = secondFirstNumber; v++){
        for(let y = firstSecondNumber; y = secondSecondNumber; y++){
            for(let u = firstTherdNumber; u = secondTherdNumber; u++){
                for(let i = firstFourNumber; i = secondFourNumber; i++){
                    if(v % 2 !== 0 && y % 2 !== 0 && u % 2 !== 0 && i % 2 !== 0){
                        barcode += (`${v}${y}${u}${i}`)
                    }
                }
            }
        }
    }
    console.log(barcode) 
}

barcodeGenerator(["3335",
"6789"])
