const stringCalculator = require('../src/stringCalculator');

test('should return 0 for an empty string', () => {
    expect(stringCalculator('')).toBe(0);
});

test('should return the number if only one number is provided', () => {
    expect(stringCalculator('5')).toBe(5);
});

test('should return the sum of two numbers separated by a comma', () => {
    expect(stringCalculator('1,2')).toBe(3);
});