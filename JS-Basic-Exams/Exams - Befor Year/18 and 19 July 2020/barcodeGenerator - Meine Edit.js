function barcodeGenerator(input){
    
    let firstBarcode = input[0];
    let secondBarcode = input[1];

    let barcode = "";

    for(let n = firstBarcode; n <= secondBarcode; n++){
        let search = n + ""
        let barcodeFirst = "";
        let num = 0;
        for(let m = 0; m < search.length ; m++){
            let thtp = search[m]
            if(thtp % 2 !== 0){
                num++
                barcodeFirst += (`${thtp}`)
            }
            if(num === 4){
                //barcodeFirst += thtp;
                barcode += (`${barcodeFirst} `);
            }
            
        }    
        //barcode += (`${barcodeFirst} `)
        
    }
    console.log(`${barcode}`)
}

barcodeGenerator(["3335",
"6789"])
