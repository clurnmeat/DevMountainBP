// Define a function that takes an array as an argument
let myFunction = (arr) => {
  // Use the reduce method to iterate over the array and accumulate the sum of even numbers
  return arr.reduce((acc, curr) => {
    // If the current number is even, add it to the accumulator
    if (curr % 2 === 0) {
      return acc + curr;
    } else {
      // Otherwise, just return the accumulator without modifying it
      return acc;
    }
  }, 0); // Initialize the accumulator to 0
};

// Call the function with an example array and log the result to the console
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8]));

let addFunct = (a, b) => {
  return a + b;
};

console.log(addFunct(2, 5));
