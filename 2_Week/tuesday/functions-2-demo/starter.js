////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
// Define functions for basic arithmetic operations
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// Define a calculator function that takes two numbers and a callback function as arguments
const calculator = (num1, num2, cb) => {
  // Checking if the input is coercible to a number
  if (+num1 && +num2) {
    num1 = +num1;
    num2 = +num2;
    // Calling the callback function with the two numbers as arguments
    return cb(num1, num2);
  } else {
    console.log("Please enter a valid number");
  }
};

// Call the calculator function with two numbers and the 'add' function as the callback
let result = calculator(4, 4, add);

// Log the result of the calculation to the console
console.log(result);

///////////////////////
////// PET STORE //////
///////////////////////

// Define an array of objects that represent dog products and an array of objects that represent cat products.
const dogProducts = [
  {
    name: "leash",
    colors: ["red", "blue", "green"],
    category: 1,
    inventory: 30,
    basePrice: 13.99,
    displayPrice: 13.99,
  },
  {
    name: "chew toy",
    colors: ["brown"],
    category: 2,
    inventory: 120,
    basePrice: 6.0,
    displayPrice: 6.0,
  },
  {
    name: "rope",
    colors: ["blue & green", "red & yellow"],
    category: 2,
    inventory: 75,
    basePrice: 4.99,
    displayPrice: 4.99,
  },
];

const catProducts = [
  {
    name: "mouse toy",
    colors: ["pink", "grey", "black"],
    category: 2,
    inventory: 125,
    basePrice: 2.5,
    displayPrice: 2.5,
  },
  {
    name: "cat sweater",
    colors: ["black"],
    category: 1,
    inventory: 15,
    basePrice: 10.0,
    displayPrice: 10.0,
  },
  {
    name: "straching post",
    colors: ["tan"],
    category: 2,
    inventory: 40,
    basePrice: 22.99,
    displayPrice: 22.99,
  },
];

// Define two functions to apply discounts to a product: one by percentage and another by a flat discount.
const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1 - discount);
};

const applyFlatDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount;
};

// Define a higher-order function that allows us to write a loop once and apply discounts.
const applyDiscounts = (arr, cb, discount) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], discount);
  }
};

// Define a function that applies a discount to products of a certain category.
const discountByCategory = (arr, cb, discount, category) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].category === category) {
      cb(arr[i], discount);
    }
  }
};

console.log(dogProducts);

// Define a function that applies a discount to products whose inventory is less than or equal to a certain amount.
const applyDiscountByInventory = (arr, cb, discount, amount) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].inventory <= amount) {
      cb(arr[i], discount);
    }
  }
};

// Apply a 50% percent discount to dog products whose inventory is less than or equal to 50.
applyDiscountByInventory(dogProducts, applyPercentDiscount, 0.5, 50);
console.log(dogProducts);

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
