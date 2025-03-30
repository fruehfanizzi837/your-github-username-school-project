function squareRoot(num) {
    if (num < 0) {
        throw new Error("Cannot compute square root of a negative number.");
    }
    const squareRoot = Math.sqrt(num);
    console.log(`The square root of ${num} is: ${squareRoot}`);
}

// Example usage:
try {
    squareRoot(-4); // This should throw an error
} catch (error) {
    console.error(error.message);
}
