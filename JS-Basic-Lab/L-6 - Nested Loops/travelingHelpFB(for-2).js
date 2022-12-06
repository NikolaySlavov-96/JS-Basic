function traveling(input) {
    let destination = "";
    let budget = 0;
    let money = 0;
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
      destination = input[i++];
      if (destination === "End") {
        break;
      }
      budget = Number(input[i++]);
      for (let k = 0; k <= budget; k++) {
   
        money = Number(input[i++]);
        sum += money;
        if (sum >= budget) {
          console.log(`Going to ${destination}!`);
          destination = "";
          i--;
          budget = 0;
          sum = 0;
          break;
        }
      }
    }
  }

  traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500"])