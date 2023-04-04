console.log('Hello world!');

const firstName = 'Michael';
let age = 40;

console.log(firstName);
console.log(age);

const isCool = false;

if (isCool === true) {
    console.log('Michael is cool');
} else {
    console.log('Michael is not cool');
}

let x = 4;
let y = 10;
let z = 7 + 8;
let sum = x + y + z;

console.log(sum); // => 29
console.log(sum + y) // => 39

console.log(sum - z + sum + y)// => 53

let str = "String"
let str2 = 'String'
let str3 = `String ${str} ${str2}`
let quote = "He said to her, 'Hello there'. Continue"

let str4 = "String" + " String " + str3

console.log(str3);
console.log(str4);

let away = 115;
let home = 115;

if (away > home) {
    console.log('Away team wins!!');
} else if (home > away) {
    console.log('Home team wins!!');
} else {
    console.log('No one wins! Its a tie!');
}

let age = 30
let age2 = 20
let age3 = 21

if(age >= age2){
    console.log(age);
}
if(age === age3){
    console.log("Its the same");
}
if(age !== age2){
    console.log("Its not the same!");
}