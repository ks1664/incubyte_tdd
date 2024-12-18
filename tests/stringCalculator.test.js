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

test('should return the sum of any amount of numbers separated by commas', () => {
    expect(stringCalculator('1,2,3,4,5')).toBe(15);
});

test('should handle newlines between numbers and return their sum', () => {
    expect(stringCalculator('1\n2,3')).toBe(6);
});

test('should support custom delimiters', () => {
    expect(stringCalculator('//;\n1;2')).toBe(3);
    expect(stringCalculator('//*\n2*3*4')).toBe(9);
});

test('should throw an exception for negative numbers', () => {
    expect(() => stringCalculator('1,-2,3')).toThrow('negative numbers not allowed: -2');
});

test('should include all negative numbers in the exception message', () => {
    expect(() => stringCalculator('1,-2,-3')).toThrow('negative numbers not allowed: -2, -3');
});
