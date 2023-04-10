// create a variable for jon's health
let jonSnowHealth = 100;
// string coersion
jonSnowHealth += "";
// console.log(typeof jonSnowHealth);

// strings are immutable.
let theWinnerIs = "Jamie is the winner";

theWinnerIs = theWinnerIs.replace("Jamie", "Jon");

// console.log(theWinnerIs);

if (theWinnerIs.includes("Jon")) {
  console.log("changes confirmed");
}

let newstring = theWinnerIs.toLowerCase().split(" ").join("-");

// console.log(newstring);

function isJonAlive(health) {
  if (health > 0) {
    console.log("Jon is alive");
  } else {
    console.log("jon has been slain, RIP Jon");
  }
}

// isJonAlive(jonSnowHealth);

const supriseAttack = function (attack) {
  jonSnowHealth -= attack;
  isJonAlive(jonSnowHealth);
};
supriseAttack(30);
supriseAttack(30);
supriseAttack(20);
supriseAttack(25);

const greeting = (person1, person2) =>
  console.log(`${person1} says hello to ${person2}`);

greeting("Vinson", "Melissa");
greeting("Dj", "Ashley");

// create a function to represent a dice roll

function rollDice() {
  let possibleRoles = [1, 2, 3, 4, 5, 6];
  let randomNumber = Math.floor(Math.random() * possibleRoles.length);
  return possibleRoles[randomNumber];
}
// console.log(rollDice());

const diceMultiplier = () => {
  let num1 = rollDice();
  let num = rollDice();
  return num1 * num;
};

console.log(diceMultiplier());
