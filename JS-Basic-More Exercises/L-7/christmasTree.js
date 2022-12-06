function christmasTree(input){
    
    let condition = Number(input[0]);

    let endCondition = (condition * 2);

    let quality = 0;
    let finalQuality = 0;
    
    for(let n = 0; n <= condition; n++){
        let print = "";
        let starSpace = 0;
        let freeSpace = 0;
        if(n === 0){
            for(let f = 0; f <= condition; f++){
                if(f === condition){
                    print += (` | `)
                    quality++
                    finalQuality++;
                    break;
                } else {
                    print += " "
                }
            }
            for(let e = condition; e <= endCondition; e++){
                if(e > condition && e <= endCondition){
                    print += " ";
                }
            }
        } else if(n <= condition){
            for(let g = 0 ; g <= condition; g++){
                if(g === condition){
                    print += (` | `)
                    quality++;
                    finalQuality++
                    break;
                } else if(g >= (condition - quality)){
                    starSpace++;
                    print += "*"
                } else {
                    freeSpace++;
                    print += " "
                }
            }
            for(let g = endCondition ; g >= condition; g--){
                if(g <= ((endCondition - finalQuality) + 1)){
                    print += " "
                } else {
                    print += "*"
                }
            }
        }
        console.log(print)
    }
}

christmasTree(["6"])