require('./js-code.js');

// new linter can see that let is not allowed
// console.log('Coin Counter App');
// const coinCounter = (amount, quarters = 0, dimes = 0, nickels = 0, pennies = 0) => {
// 	if (isNaN(amount)) {
// 		return;
// 	}
// 	if (amount == 0) {
// 		return console.log(`finished! Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`);
// 	}
// 	if (amount >= 25) {
// 		console.log('quarter');
// 		return coinCounter(amount - 25, quarters + 1);
// 	}
// 	if (amount >= 10) {
// 		console.log('dime');
// 		return coinCounter(amount - 10, quarters, dimes + 1);
// 	}
// 	if (amount >= 5) {
// 		return coinCounter(amount - 5, quarters, dimes, nickels + 1);
// 	}
// 	if (amount < 5) {
// 		return coinCounter(amount - 1, quarters, dimes, nickels, pennies + 1);
// 	} else {
// 		return;
// 	}
// };

// coinCounter(423);

// function makeChange(amount) {
// 	const quarters = 0;
// 	function end() {
// 		if (amount == 0) {
// 			console.log('finished');
// 			return;
// 		}
// 	}
// 	function addQuarter() {
// 		if (amount >= 25) {
// 			quarters++;
// 			return amount - 25;
// 		}
// 		// function addDime() {
// 		// 	function addNickel() {
// 		// 		function addPenny() {}
// 		// 	}
// 		// }
// 	}
// }

// makeChange(25);

const addPrefix = (prefix) => {
	return function(name) {
		return console.log(`Hello ${prefix} ${name}`);
	};
};

addPrefix('Sir')('Luke');
