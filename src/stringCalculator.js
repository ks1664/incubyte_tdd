function stringCalculator(input) {
    if (input === '') return 0;

    let delimiter = /,|\n/; // Default delimiters: comma and newline
    if (input.startsWith('//')) {
        const parts = input.split('\n', 2);
        let customDelimiter = parts[0].slice(2); // Extract and convert custom delimiter to regex
        // Escape special regex characters
        customDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        delimiter = new RegExp(customDelimiter);
        input = parts[1]; // Update input to exclude delimiter definition
    }

    const numbers = input.split(delimiter).map(Number);
    const negatives = numbers.filter(num => num < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = stringCalculator;
