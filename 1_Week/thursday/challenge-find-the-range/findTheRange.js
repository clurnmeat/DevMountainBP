// Starting array
let array = [28, 43, -12, 30, 4, 0, -36];

// Write your solution below:
// array.sort(function(a,b){return a - b})
// console.log(array)

let max = 0;
let min = 0;
for (i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
  if (array[i] < min) {
    min = array[i];
  }
}
console.log(min, max);
