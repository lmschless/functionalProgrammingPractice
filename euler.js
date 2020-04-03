require('./euler.js');

const sumMultiples = (num = 1, sum = 0) => {
	if (num == 25) {
		console.log(`Finished! -- num: ${num}, sum: ${sum}`);
		return;
	}
	if (num % 3 == 0 || num % 5 == 0) {
		console.log(`num: ${num}, sum: ${sum}`);
		sum = sum + num;
		return sumMultiples(num + 1, sum);
	} else {
		return sumMultiples(num + 1, sum);
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
