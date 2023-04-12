////////// PROBLEM 1 //////////

// ***** Do not edit the code below *****
function findGrape(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].color === "purple") {
      return console.log(
        `The fruit with index ${arr.indexOf(arr[i])} is a grape`
      );
    }
  }
}
// ***** Do not edit the code above *****

/*
The code above is an example of 'function declaration.' Please re-write the function in 'function expression' and 'arrow function' syntaxes. 
*/

// RE-WRITE THE ABOVE FUNCTION IN 'FUNCTION EXPRESSION' SYNTAX HERE.

const findGrapeExp = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].color === "purple") {
      return console.log(
        `The fruit with index ${arr.indexOf(arr[i])} is a grape`
      );
    }
  }
};

// RE-WRITE THE ABOVE FUNCTION IN 'ARROW FUNCTION' SYNTAX HERE.

const findGrapeArrow = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].color === "purple") {
      return console.log(
        `The fruit with index ${arr.indexOf(arr[i])} is a grape`
      );
    }
  }
};

////////// PROBLEM 2 //////////
/*
Write a one line function (give a name of your choice) with an implicit return that when the function is invoked, it will print: 'The first parameter is [parameter1]. The second parameter is [parameter2]'.
*/

// CODE HERE
const arrowFunc = (parameter1, parameter2) =>
  `The first parameter is ${parameter1} and the second parameter is ${parameter2}`;

// INVOKE THE FUNCTION HERE. THE PARAMETERS TAKE ANY DATATYPE.
let arrow = arrowFunc(3, "the");

////////// PROBLEM 3 //////////
/*
Write a function called 'greeting' that takes 3 parameters: firstName, lastName, and a callback function. In the function, invoke the callback, passing in a concatenation of firstName and lastName. 
Then, outside of the greeting function, invoke the greeting function, passing in the value firstName and lastName of your choice, and a callback function that takes a parameter of fullName. The callback function will print 'Hello, my full name is [fullName]'. 
*/

// CODE 'GREETING FUNCTION' HERE
// const fullName1 = (name1, name2) => {
//   let fullName = name1 + name2;
//   let phrase = `Hello, my full name is ${fullName}`;
//   return phrase;
// };

const fullName = (name1, name2) => {
  let fullName = name1 + " " + name2;
  return fullName;
};

const greeting = (firstName, lastName, cb) => {
  let fullName = cb(firstName, lastName);
  console.log(`Hello, my full name is ${fullName}`);
};

let greet = greeting("John", "Smith", fullName);
console.log(greet);
// INVOKE 'GREETING FUNCTION' HERE
greeting("john", "smith", fullName);
////////// PROBLEM 4 //////////

// ***** Do not edit the code below *****
let prices = [50, 33, 78, 100, 25];

let totalCost = [];
// ***** Do not edit the code above *****

/* 
Write a function called 'pricesPlusTax' that takes 2 params: an array ('prices' array) and a callback function. Inside the function, loop over the 'prices' array. For every iteration, calculate a new total cost (original price plus 20% tax), then push it to the 'totalCost' array. After the loop, invoke the callback function, passing in the 'totalCost' array.
*/

// CODE HERE
const pricesPlusTax = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i] + arr[i] * 0.2;
    totalCost.push(a);
  }
  let cost = cb(totalCost);
  console.log(`The new array plus tax = ${totalCost}`);
};
/* 
Invoke the 'pricesPlusTax' function, passing in the 'prices' array and a callback function (passing in 'totalCost' as a param) that will print "The new array plus tax = [totalCost]"
*/

// CODE HERE
function getCost(totalCost) {
  return totalCost;
}

let pie = pricesPlusTax(prices, getCost);
////////// PROBLEM 5 //////////

/* 
A function can return another function. Let's create one!

Create a function called 'multiplyingFactory' that takes a number as a param. The function returns another function that takes another number as a param. 

The inner function should run this logic: if the first number passing in is greater than and equal to 5, print the multiplication of the first and second numbers. If not, print "Cannot multiply: the first number is smaller than 5." 
*/

// CODE HERE
// higher-order function
const multiplyingFactory = (num) => {
  return function (num2) {
    if (num >= 5) {
      return num2 * num;
    } else {
      return `Cannot multiply: the first number is smaller than 5.`;
    }
  };
};
/* 
Let's invoke the 'multiplyingFactory' function that will return another function, and save it into a variable called 'timesFour.' Let's pass in number 3 as a param.
*/

// CODE HERE
const timesFour = multiplyingFactory(5);
/* 
Now, timesFour is the new function (the inner function that was being returned when we invoked 'multiplyingFactory' function). The number 3 that we passed in as a first number is now saved in the 'timesFour' function. 

Let's invoke 'timesFour' and pass in number 4 as a param. Number 4 here is the second number that will multiply the first number (number 3).

Run the code in node to see the printed result. You should see "Cannot multiply: the first number is smaller than 5."
*/

// INVOKE 'timesFour' HERE
let responses = timesFour(4);
console.log(responses);
/* 
Change the param for 'multiplyingFactory' invocation to number 5. Then invoke 'timesFour' again, passing in number 4. Run the code in node, and you should see 20.
*/
