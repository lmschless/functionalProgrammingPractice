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

// const addPrefix = (prefix) => {
// 	return function(name) {
// 		return console.log(`Hello ${prefix} ${name}`);
// 	};
// };

// addPrefix('Sir')('Luke');

// const soundMaker = (sound) => {
// 	return function(animal) {
// 		return console.log(`${animal} goes ${sound}`);
// 	};
// };

// soundMaker('roar')('lion');
// const lionSound = soundMaker('roar');
// lionSound('lion');

function nameEnhancer(prefix) {
	return function(suffix) {
		return function(name) {
			return `${prefix} ${name} ${suffix}`;
		};
	};
}
const misterJunior = nameEnhancer('Mister')('Junior');
const duchessThird = nameEnhancer('Duchess')('The Third');
console.log(misterJunior('john'));
duchessThird('Elizabeth');

const addaMult = (num) => {
	return (num1) => {
		return (num2) => {
			return (num + num2) * num1;
		};
	};
};

const addTwoMultiplyByThree = addaMult(2)(3);
console.log(addTwoMultiplyByThree(10));

// const AddAMult = (NumToAdd) => {
// 	return (NumToMult) => {
// 		return (num) => {
// 			return (num + NumToAdd) * NumToMult;
// 		};
// 	};
// };

// const addTwoMultiplyByThree = AddAMult(2)(3);
// console.log(addTwoMultiplyByThree(10));
