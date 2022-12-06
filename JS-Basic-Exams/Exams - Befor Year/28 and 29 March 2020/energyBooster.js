function energyBooster(input){
	
	let typeGel = input[0];
	let forPackage = input[1];
	let gualityGroup = input[2];
	
	
	let priceAllSum = 0;
	
	switch(typeGel){
		case "Watermelon":
			switch(forPackage){
				case "small": priceAllSum = gualityGroup * (2 * 56); break;
				case "big": priceAllSum = gualityGroup * (5 * 28.7); break;
		}
		break;
		case "Mango":
			switch(forPackage){
				case "small": priceAllSum = gualityGroup * (2 * 36.66); break;
				case "big": priceAllSum = gualityGroup * (5 * 19.60); break;
		}
		break;
		case "Pineapple":
			switch(forPackage){
				case "small": priceAllSum = gualityGroup * (2 * 42.10); break;
				case "big": priceAllSum = gualityGroup * (5 * 24.80); break;
		}
		break;
		case "Raspberry":
			switch(forPackage){
				case "small": priceAllSum = gualityGroup * (2 * 20); break;
				case "big": priceAllSum = gualityGroup * (5 * 15.20); break;
			}
		break;
		}
		if(priceAllSum >= 400 && priceAllSum <= 1000){
		priceAllSum = priceAllSum * 0.85
		} else if(priceAllSum > 1000){
		priceAllSum = priceAllSum * 0.50
		}
		
	console.log(`${(priceAllSum).toFixed(2)} lv.`)
}

energyBooster(["Watermelon" , "big" , "4"])