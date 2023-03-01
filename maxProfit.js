// var maxProfit = function (prices) {
// 	let profit = 0;

// 	let stockToBuy = prices[0];

// 	for (let i = 1; i < prices.length; i++) {
// 		if (stockToBuy > prices[i]) {
// 			stockToBuy = prices[i];
// 		} 1
// //buy 1 
// 		const currentProfit = prices[i] - stockToBuy;
// 		console.log( prices[i] ,stockToBuy ,`${currentProfit}currentProfit` , `${profit}profit`)
// 		if (currentProfit > profit) {
// 			profit = currentProfit; 1
// 		}
// 	}

// 	return profit;
// };

// console.log(maxProfit([7,1,5,3,6,4]))


var maxProfit = function (prices) {
		let left = 0;
		let right = left + 1
		let maxprofit = 0
	    while (right < prices.length) {
			7,1,5,3,6,4
			if (prices[right] > prices[left]) {
				console.log(prices[right] - prices[left])
			maxprofit = Math.max( maxprofit,prices[right] - prices[left])
             //5
				
			}
			else left = right
			//left = 1
			console.log(left)


		
			right +=1
			
		}
		return maxprofit
	
	};
	
	console.log(maxProfit([7,1,5,3,6,4]))
	
	
	