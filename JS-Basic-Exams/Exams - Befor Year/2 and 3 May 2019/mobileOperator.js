function mobileOperator(input){

    let yearContract = input[0];
    let typeContract = input[1];
    let mobileInternet = input[2];
    let qualityMonthPay = Number(input[3]);

    let allPayMoney = 0;

    switch(typeContract){
        case "Small":
            switch(yearContract){
                case "one": allPayMoney += 9.98 ;break;
                case "two": allPayMoney += 8.58 ;break;
            }
        break;
        case "Middle":
            switch(yearContract){
                case "one": allPayMoney += 18.99 ;break;
                case "two": allPayMoney += 17.09 ;break;
            }
        break;
        case "Large":
            switch(yearContract){
                case "one": allPayMoney += 25.98 ;break;
                case "two": allPayMoney += 23.59 ;break;
            }
        break;
        case "ExtraLarge":
            switch(yearContract){
                case "one": allPayMoney += 35.99 ;break;
                case "two": allPayMoney += 31.79 ;break;
            }
        break;
    }
    if(mobileInternet === "yes"){
        if(allPayMoney <= 10){
            allPayMoney += 5.50;
        } else if(allPayMoney <= 30){
            allPayMoney += 4.35;
        } else if(allPayMoney > 30){
            allPayMoney += 3.85;
        }
    allPayMoney *= qualityMonthPay
    } else if(mobileInternet === "no"){
        allPayMoney *= qualityMonthPay;
    }

    if(yearContract === "two"){
        allPayMoney *= 0.9625
    }

    console.log(`${(allPayMoney).toFixed(2)} lv.`)
}
mobileOperator(["one",
"Small",
"yes",
"10"])

