// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];

// Write your solution below
temp = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 1; j < array.length; j++) {
    if (array[i] + array[j] === 0) {
      temp = true;
    } else {
      temp = false;
    }
  }
}
console.log(temp);
