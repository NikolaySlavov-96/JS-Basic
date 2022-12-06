function pcStore(input){
    
    let CPU = Number(input[0]);
    let GPU = Number(input[1]);
    let RAM = Number(input[2]);
    let qualityRAM = Number(input[3]);
    let purcentDiscount = Number(input[4]);

    let bgnCPU = CPU * 1.57;
    let bgnGPU = GPU * 1.57;
    let bgnRAM = RAM * 1.57;
    let sumRAM = bgnRAM * qualityRAM;
    let discountCPU = bgnCPU - (bgnCPU * purcentDiscount);
    let discountGPU = bgnGPU - (bgnGPU * purcentDiscount);
    
    let sumPrice = sumRAM + discountCPU + discountGPU;

    console.log(`Money needed - ${sumPrice.toFixed(2)} leva.`)
}
pcStore(["500",
"200",
"80",
"2",
"0.05"])


