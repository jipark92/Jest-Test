const calculator = require('./calculator');

describe('add', () => {
	test('adds 2 and 2', () => {
		expect(calculator.add(2,2)).toBe(4);
	});
});

describe('subtract', () => {
	test('subtracts numbers', () => {
		expect(calculator.subtract(10,4)).toBe(6);
	});
});

describe('multiply', () => {
	test('multiplies two numbers', () => {
		expect(calculator.multiply(2,4)).toBe(8);
	});
});

describe('divide', () => {
	test('divide two numbers', () => {
		expect(calculator.divide(4,4)).toBe(1);
	});
});
