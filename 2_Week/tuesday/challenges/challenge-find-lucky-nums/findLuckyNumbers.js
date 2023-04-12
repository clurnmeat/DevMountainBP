// Write your code below this line.
// const luckyNumbers = (n) => {
//   setOfNumbers = [];
//   while (setOfNumbers.length < n) {
//     let number = Math.floor(Math.random() * 10) + 1;
//     if (!setOfNumbers.includes(n)) {
//       setOfNumbers.push(n);
//     }
//   }
//   return setOfNumbers;
// };
// console.log(luckyNumbers(8));
const setOfNumbers = [];
function luckyNumbers(n) {
  for (let i = 1; i <= n; i++) {
    number = Math.floor(Math.random() * 10) + 1;

    if (!setOfNumbers.includes(number)) {
      setOfNumbers.push(number);
    } else {
      numbger = Math.floor(Math.random() * 10) + 1;
      setOfNumbers.push(numbger);
    }
  }
}

function setONumbers(n) {
  let number = Math.floor(Math.random() * 10) + 1;
  while (!setOfNumbers.includes(number)) {
    for (let i = 1; i <= n; i++) {
      setOfNumbers.push(number);
    }
  }
}
console.log(setONumbers(8));
