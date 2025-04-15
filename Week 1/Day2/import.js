import { sum, max } from './export.js';  // used in Modern  JavaScript (ES6+)
// const { sum, max } = require('./export.js'); // used in CommonJS (older Node.js versions)


try {
    const numbers = [1, 2, 3, 4, 5];

    const total = sum(numbers);
    console.log(`Total: ${total}`); // Output: Total: 15

    const maximum = max(numbers);
    console.log(`Maximum: ${maximum}`); // Output: Maximum: 5

} catch (error) {
    console.error('Error:', error);

}



// try-catch block to handle errors
// Error handling is crucial in programming to ensure that the application can gracefully handle unexpected situations.
// The try-catch block is used to catch and handle errors that occur during the execution of code within the try block.
// If an error occurs, the catch block is executed, allowing the developer to log the error, provide fallback behavior, or notify the user.