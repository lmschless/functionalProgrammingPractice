require('./js-code.js');

// new linter can see that let is not allowed

const coinCounter = (amount) => {
	const currentValue = amount;
	if (isNaN(amount) || isNaN(currentValue)) {
		return;
	}
	if (currentValue >= 25) {
		return function() {
			currentValue - 25;
		};
	} else {
		return function() {
			currentValue - 1;
		};
	}
};

coinCounter(100);
