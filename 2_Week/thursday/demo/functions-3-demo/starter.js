////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

// An array of strings containing names of characters from Lord of the Rings.
const lotr = [
  "biLbO BaGGINs",
  "leGOlAs",
  "Frodo bAGGINS",
  "sAMwiSe GamGEe",
  "gAndALF tHe GREY",
];

// A function that takes an array of strings and converts them to camel case.
const copyArrToCamelCase = (arr) => {
  const newArr = [];

  // Looping through each string in the array.
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i]; // Assigning the current string to a variable.
    const splitStr = str.split(" "); // Splitting the string into an array of words.
    let camelCaseStr = "";

    // Looping through each word in the array.
    for (let x = 0; x < splitStr.length; x++) {
      let word = splitStr[x]; // Assigning the current word to a variable.

      word = word.toLowerCase(); // Converting the word to lowercase.

      if (x !== 0) {
        // Checking if it's not the first word in the array.
        word = word.charAt(0).toUpperCase() + word.slice(1); // Converting the first letter of the word to uppercase.
      }

      camelCaseStr += word; // Adding the modified word to the camelCaseStr variable.
    }

    newArr.push(camelCaseStr); // Pushing the final camelCase string to the new array.
  }

  return newArr; // Returning the new array.
};

// A function that takes an array of strings and converts them to snake case.
const copyArrToSnakeCase = (arr) => {
  const newArr = [];

  // Looping through each string in the array.
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i]; // Assigning the current string to a variable.
    str = str.toLowerCase(); // Converting the string to lowercase.
    const splitStr = str.split(" "); // Splitting the string into an array of words.
    const snakeCaseStr = splitStr.join("_"); // Joining the words with underscores to form the snake case string.
    newArr.push(snakeCaseStr); // Pushing the final snake case string to the new array.
  }

  return newArr; // Returning the new array.
};

// CODE HERE
// Higher Order Function
const copyArrAndChange = (arr, cb) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let newValue = cb(arr[i]);
    result.push(newValue);
  }
  return result;
};
// Callback Functions
const copyToCamelCaseCB = (str) => {
  const splitStr = str.split(" ");
  let camelCaseStr = "";
  for (let i = 0; i < splitStr.length; i++) {
    let wrd = splitStr[i];
    word = word.toLowerCase();
    if (i !== 0) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    camelCaseStr += word;
  }
  return camelCaseStr;
};
const copyStrToSnakeCaseCB = (str) => str.toLowerCase().split(" ").join("_");

// console.log(copyArrAndChange(lotr, copyStrToSnakeCaseCB));
////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////

//// MAP ////
const nums = [1, 2, 3, 4, 5, 6, 7];
const multiplyBy10 = (num) => num * 10;

for (let i = 0; i < nums.length; i++) multiplyBy10(nums[i]);

let mappedNums = nums.map(multiplyBy10);
// console.log(mappedNums);
/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ["red", "blue", "yellow", "green", "orange"];

const mappedColors = colors.map((el) => (el = "pink"));
console.log(mappedColors);

const mappedColors1 = colors.map((el) => {
  let primary = ["red", "yellow", "blue"];
  let isPrimary = primary.includes(el);
  return {
    color: el,
    isPrimary: isPrimary,
  };
});
// console.log(mappedColors1);
/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ["Bernard", "Elizabeth", "Conrad", "Mary Margaret"];

const formalGreeting = (names) => {
  // CODE HERE
  return names.map((name) => `Hello, ${name}`);
};

// console.log(formalGreeting(formalNames));
// Call formalGreeting passing in the formalNames array

//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = [
  "Binghampton",
  "Albany",
  "New York",
  "Ithaca",
  "Auburn",
  "Rochester",
  "Buffalo",
];

// const placesThatStartWithA =
//   places.filter((city) => city[city.length - 1]) === "o";

// console.log(placesThatStartWithA);

/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
  { receptionist: "James" },
  { programmer: "Steve" },
  { designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE
const indetifier = (arr) => arr.filter((el) => el.programmer);

console.log(indetifier(jobs)[0]);
// call the function passing in the jobs array

//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290];

const productOfArray = (numbers) => {
  // Code here
  return numbers.reduce((acc, curr) => acc * curr);
};

// CODE HERE

// call productOfArray passing in numsToReduce
console.log(productOfArray(numsToReduce));
/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000;

const expenses = [
  {
    title: "rent",
    amount: 1000,
  },
  {
    title: "car payment",
    amount: 250,
  },
  {
    title: "food",
    amount: 300,
  },
];

const remaining = expenses.reduce((a, c) => a - c.amount, budget);

console.log(remaining);
