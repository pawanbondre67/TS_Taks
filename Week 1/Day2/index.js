const numbers = [1, 2, 3, 4, 5];
// Using for loop
for(let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// Output: 1, 2, 3, 4, 5


// Using for...of loop
for (let number of numbers) {
    console.log(number);
    }
// Output: 1, 2, 3, 4, 5

// Using forEach method
numbers.forEach((number) => {
    console.log(number);
});
// Output: 1, 2, 3, 4, 5


// Using for...in loop (not recommended for arrays, but works)


// map method
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
// Output: [2, 4, 6, 8, 10]

// filter method
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
// Output: [2, 4]

// reduce method

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
// Output: 15


const max = numbers.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue : accumulator;
}, numbers[0]);

console.log(max);
// Output: 5


//objects
const object = { a: 1, b: 2, c: 3 };
for (let key in object) {
    console.log(`${key}: ${object[key]}`);
}
// Output: a: 1, b: 2, c: 3

// Using Object.entries() method
const entries = Object.entries(object);
for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
}
// Output: a: 1, b: 2, c: 3



// lexical scope and closures

function outerFunction() {
    const outerVariable = "I'm from the outer scope";

    function innerFunction() {
        console.log(outerVariable); // Accessing a variable from the outer scope
    }

    innerFunction();
}

outerFunction();
// Output: I'm from the outer scope


// closures

function createCounter() {
    let count = 0; // Variable in the outer function's scope
console.log( 'inner count ---------->',count); // Output: 0
    return function () {
        count++; // Inner function accessing the outer variable
        console.log( 'inner count ++++   ---------->',count); // Output: 0
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

