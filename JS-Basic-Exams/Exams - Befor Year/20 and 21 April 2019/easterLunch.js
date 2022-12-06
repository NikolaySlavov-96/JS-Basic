function easterLunch(input){

    let cake = Number(input[0]);
    let eggs = Number(input[1]);
    let kgCookies = Number(input[2]);

    let allPayPrice = (cake * 3.20) + (eggs * 4.35) + (kgCookies * 5.40) + ((eggs * 12) * 0.15)

    console.log(`${(allPayPrice).toFixed(2)}`)
}

easterLunch(["4",
"4",
"3"])

