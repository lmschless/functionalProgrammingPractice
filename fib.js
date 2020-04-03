require('./fib.js');

const findSum = (sum = 0, n1 = 1, n2 = 2) => {
	() => {
		if ((sum = 100)) {
			return;
		}
		return findSum((sum = n1 + n2));
	};
};
