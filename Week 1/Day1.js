// Example of let
let count = 10;
count = 20; // 'let' allows reassignment

// Example of const
const name = "John";
// name = "Doe"; // Error: 'const' does not allow reassignment

console.log(name); // Output: John

// Data types
let isActive = true;
let age = 25;
let username = "Alice"; // string
let items = ["apple", "banana"]; //array
let user = { id: 1, name: "Alice" }; // object

// Hoisting example
console.log(hoistedVar); // undefined 
var hoistedVar = "I am hoisted";

// let and const are not hoisted in the same way
// console.log(hoistedLet); //  Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am not hoisted like var";







// 02. arrow functions, destructuring, spread/rest
// Arrow function example

const add = (a, b) => a + b;
const sum = add(5, 10);
console.log(sum); // Output: 15

// Destructuring example
const person = { name: "Alice", age: 25 };
const { name: personName, age: personAge } = person;
console.log(personName); // Output: Alice
console.log(personAge); // Output: 25


// Array destructuring
const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2

// Spread operator example
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]


// Rest operator example
const sumAll = (...args) => {
  console.log(args); // Output: [1, 2, 3, 4, 5]
  // args is an array of all arguments passed to the function
  return args.reduce((acc, curr) => acc + curr, 0);
};

const total = sumAll(1, 2, 3, 4, 5);
console.log(total); // Output: 15




//03 Callbacks,setTimeout vs Promises vs async/await behavior 


//  Callbacks
// A callback is a function passed as an argument to another function, executed after the completion of the operation.
// Example of a callback function

function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData((data) => {
  console.log(data); // Output: Data fetched
});



//  Promises
// Promises represent a value that may be available now, or in the future, or never. They help avoid "callback hell."

function fetchData(shouldSucceed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve("Data fetched successfully");
      } else {
        reject("Failed to fetch data");
      }
    }, 1000);
  });
}

// Case 1: Fulfilled
fetchData(true)
  .then((data) => console.log(data)) // Output: Data fetched successfully
  .catch((error) => console.error(error));

// Case 2: Rejected
fetchData(false)
  .then((data) => console.log(data))
  .catch((error) => console.error(error)); // Output: Failed to fetch data





//  async/await
// async/await is syntactic sugar over Promises, making asynchronous code look synchronous.


async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data); // Output: Data fetched
  } catch (error) {
    console.error(error);
  }
}

getData();


//  setTimeout
// setTimeout is used to delay execution but doesn't guarantee exact timing due to the event loop.


console.log("Start");
setTimeout(() => console.log("Delayed"), 1000);
console.log("End");
// Output:
// Start
// End
// Delayed
