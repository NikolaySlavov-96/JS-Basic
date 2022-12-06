function hospital(input){
    let index = 0
    let period = Number(input[index++]);
    let second = Number(input[index++]);

    let daysWork = 0;
    let addDoctor = 7;

    let review = 0;
    let underReview = 0;
    
    let reviewIf = 0;
    let underReviewIf = 0;

    for(let n = 1; n <= period; n++){
        daysWork++;
        if(daysWork % 3 === 0){
            if(reviewIf < underReviewIf){
                    addDoctor++;
                    reviewIf = 0;
                    underReviewIf = 0;
            }
        }
        
        if(second === addDoctor) {
            review += addDoctor;
            reviewIf += addDoctor;
        }  else if(second < addDoctor) {
            review += Number(second);
            reviewIf += Number(second);
        } else if(second > addDoctor){
            underReview += (second - addDoctor)
            underReviewIf += (second - addDoctor)
            review += addDoctor
            reviewIf += addDoctor
        }
        second = Number(input[index++])
    }
    console.log(`Treated patients: ${review}.`)
    console.log(`Untreated patients: ${underReview}.`)
}
hospital(["6","30","7","8","9","9","9"]);