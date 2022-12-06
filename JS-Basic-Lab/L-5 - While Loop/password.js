function password(input){
    index = 0;
    let name = input[index];
    index++;
    let pasword = input[index];
    index++;
    let tempPasword = input[index];
    index++


    while(tempPasword !== pasword){

        tempPasword = input[index];
        index++;
    }
    console.log(`Welcome ${name}!`)
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
