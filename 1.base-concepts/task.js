"use strict";

function solveEquation(a, b, c) {
	const arr = [];
	const d = b * b - 4 * a * c;
	if (d > 0) {
		const x1 = (-b + Math.sqrt(d)) / (2 * a);
		const x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1);
		arr.push(x2);
	} else if (d === 0) {
		const x = -b / (2 * a);
		arr.push(x);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (typeof percent !== "number") {
		return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
	}
	if (typeof contribution !== "number") {
		return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
	}
	if (typeof amount !== "number") {
		return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
	}
	if (typeof countMonths !== "number") {
		return `Параметр "Количество месяцев" содержит неправильное значение "${countMonths}"`;
	}

	const percentPerMonth = percent / 100 / 12;

	const loanBody = amount - contribution;

	const monthlyPayment = loanBody * (percentPerMonth + percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1));

	const totalAmount = parseFloat((monthlyPayment * countMonths).toFixed(2));

	return totalAmount;

}

// console.log(calculateTotalMortgage(10, 0, 50000, 12));
// console.log(calculateTotalMortgage(10, 1000, 50000, 12));
// console.log(calculateTotalMortgage(10, 0, 20000, 24));
// console.log(calculateTotalMortgage(10, 1000, 20000, 24));
// console.log(calculateTotalMortgage(10, 20000, 20000, 24));
// console.log(calculateTotalMortgage(10, 0, 10000, 36));
// console.log(calculateTotalMortgage(15, 0, 10000, 36));