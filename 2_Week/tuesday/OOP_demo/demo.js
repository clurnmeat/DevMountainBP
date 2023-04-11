// OOP Demo

let person = {
  firstName: "Michael",
  lastName: "Scott",
  age: 34,
};

// console.log(person.firstName);
// console.log(person["firstName"]);

let meal = {
  appetizer: "cheese sticks",
  entree: "chicken parm",
  dessert: "ice cream",
  drink: "Coke",
};

let { dessert } = meal;
// console.log(dessert);
let { entree, appetizer } = meal;

// console.log(entree);
// console.log(appetizer);

const { drink: sweetness } = meal;

// console.log(sweetness);

const {
  appetizer: myAppetizer,
  entree: myEntree,
  dessert: myDessert,
  drink: myDrink,
} = meal;

for (let key in meal) {
  console.log(`${key}: ${meal[key]}`);
}

person.job = "Web Developer";

console.log(person);

let teams = {
  teamOne: ["ryan", "alex", "wyatt", "tj"],
  teamTwo: ["henry", "cole", "charlie", "zeke"],
  teamThree: ["porter", "blake", "june", "owen"],
  teamFour: ["brian", "riley", "ezra", "jordan"],
  teamFive: ["grey", "milo", "mckay", "leo"],
};

delete teams.teamFour;
console.log(teams);

class Car {
  constructor(make, model, year, color) {
    this.makerOfCars = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = 0;
  }
  drive(milesToDrive) {
    this.miles += milesToDrive;
  }
}

let chasesCar = new Car("Pontiac", "Grandprix", 1998, "red");

console.log(chasesCar);

class Sedan extends Car {
  constructor(make, model, year, color, type) {
    super(make, model, year, color);
    this.type = type;
    this.passengerCount = 5;
  }
}

let vinsonsCar = new Sedan("Tesla", "model 3", 2025, "Matte Black", "Electric");

console.log(vinsonsCar);
