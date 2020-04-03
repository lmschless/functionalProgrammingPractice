require('./euler.js');

const sumMultiples = (num = 1, sum = 0) => {
	if (num == 15) {
		console.log(num, sum);
		return;
	}
	if (num % 3 == 0 || num % 5 == 0) {
		console.log(`num: ${num}, sum: ${sum}`);
		return sumMultiples(num + 1, sum + num);
	} else {
		return sumMultiples(num + 1);
	}
};

sumMultiples();

// const sumMultiples = (num = 1) => {
// 	const sum = 0;
// 	// const num = number;
// 	() => {
// 		if (num % 3 == 0 || num % 5 == 0) {
// 			console.log(`num: ${num}, sum: ${sum}`);
// 			return (sum += num);
// 		} else {
// 			console.log(num, sum);
// 			return;
// 		}
// 	};
// 	if (num == 10) {
// 		console.log(sum);
// 		return;
// 	} else {
// 		return sumMultiples(num + 1, sum);
// 	}
// };

// sumMultiples();
