function yardGreening (input) {
    let price = Number(input[0]) * 7.61; 
    
    let отстъпка = 0.18 * price ;
    let крайнаЦенаНаУслугата = price - отстъпка ;
    
    let result1 = `The final price is: ${крайнаЦенаНаУслугата} lv.`
    let result2 = `The discount is: ${отстъпка} lv.`


     // •	"The final price is: {крайна цена на услугата} lv."
     // •	"The discount is: {отстъпка} lv"

   
    console.log(result1);
    console.log(result2);
}

yardGreening (["150"]);