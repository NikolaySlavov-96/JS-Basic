function onTimeForTheExam(input){
    
    let hoursExamh = Number(input[0])
    let hoursExam = hoursExamh * 60;
    let minuteExam = Number(input[1]);
    let sumMinuteExam = hoursExam + minuteExam;
    let hoursArriveh = Number(input[2]) 
    let hoursArrive = hoursArriveh * 60;
    let minutesArrive = Number(input[3]);
    let sumMinuteArrive = hoursArrive + minutesArrive;
    let result = "";
    let hours = 0;
    let minute = 0;

    if(sumMinuteExam < sumMinuteArrive){
        result = ("Late")
    } else if((sumMinuteExam >= sumMinuteArrive && (sumMinuteExam - sumMinuteArrive) <= 30) || sumMinuteExam === sumMinuteArrive){
        result = ("On time")
    } else if(sumMinuteExam > sumMinuteArrive){
        result = ("Early")
    }
    console.log(result)

    if((sumMinuteExam - sumMinuteArrive) >= 60 || (sumMinuteArrive - sumMinuteExam) >= 60){
        if(sumMinuteExam - sumMinuteArrive > 0){
            if((hoursExamh - hoursArriveh) !== 0 && (minutesArrive - minuteExam) >= 0){
                hours = hoursExamh - hoursArriveh
                minute = minutesArrive - minuteExam
            } else if(hoursExamh - hoursArriveh !== 0){
                hours = hoursExamh - hoursArriveh
                minute = minuteExam - minutesArrive
            }
        } else if(sumMinuteArrive - sumMinuteExam >= 0){
            if(hoursExamh - hoursArriveh !== 0){
                hours = hoursArriveh - hoursExamh
                minute = minutesArrive - minuteExam
            } else if(hoursExamh - hoursArriveh === 0){
                hours = ""
                minute = minutesArrive - minuteExam
            }
        }
    } else if((sumMinuteExam - sumMinuteArrive) <= 60 || (sumMinuteArrive - sumMinuteExam) <= 60){
        if((sumMinuteExam - sumMinuteArrive) >= 0){
            if(hoursArriveh - hoursExamh !== 0){
                minute = sumMinuteExam - sumMinuteArrive
            } else if(hoursExamh - hoursArriveh === 0 && (minutesArrive - minuteExam) >= 0 ){
                minute = minutesArrive - minuteExam
            } else if(hoursExamh - hoursArriveh === 0){
                minute = minuteExam - minutesArrive
            }
        } else if((sumMinuteArrive - sumMinuteExam) >= 0){
            if(hoursArriveh - hoursExamh !== 0){
                minute = sumMinuteArrive - sumMinuteExam
            } else if(hoursExamh - hoursArriveh === 0){
                minute = minutesArrive - minuteExam
            }
        }
    }

    if(result === "Late"){
        if(hours !== 0 && hours !== "" && minute != 0){
            console.log(`${hours}:${minute} hours after the start`)
        } else if(hours !== 0 && minute < 10 && hours !== ""){
            console.log(`${hours}:0${minute} hours after the start`)
        } else if(minute >= 10){
            console.log(`${minute} minutes after the start`)
        } else if(minute < 10){
            console.log(`${minute} minutes after the start`)
        }
    } else if(result === "Early"){
        if(hours !== 0 && hours !== "" && minute >= 10){
            console.log(`${hours}:${minute} hours before the start`)
        } else if(hours !== 0 && minute < 10 && hours !== ""){
            console.log(`${hours}:0${minute} hours before the start`)
        } else if(minute < 10){
            console.log(`${minute} minutes before the start`)
        } else if(minute >= 10){
            console.log(`${minute} minutes before the start`)
        }
    } else if(result ==="On time"){
        if(minute !== 0){
            console.log(`${minute} minutes before the start`)
        }
    }
}

onTimeForTheExam(["9","30","12","29"])


// (["9","00","10","30"]) - Late
// (["14","00","13","55"]) - On time
// (["11","30","8","12"]) - Early