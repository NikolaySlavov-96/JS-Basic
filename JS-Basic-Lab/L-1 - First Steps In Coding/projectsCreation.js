function projectsCreation (input) {
    let иметоНаАрхитекта = (input[0]);
    let бройНаПроектите = (input[1]);
    let необходимиЧасове = (input[1]) * 3; 

    //•	"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."


    let result = `The architect ${иметоНаАрхитекта} will need ${необходимиЧасове} hours to complete ${бройНаПроектите} project/s.`

    console.log(result);
}

projectsCreation(["Nikolay" , "3"]);
