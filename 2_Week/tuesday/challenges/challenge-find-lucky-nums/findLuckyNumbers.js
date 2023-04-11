// Write your code below this line.
const luckyNumbers = (n) => {
  setOfNumbers = [];
  while (setOfNumbers.length < n) {
    let number = Math.floor(Math.random() * 10) + 1;
    if (!setOfNumbers.includes(n)) {
      setOfNumbers.push(n);
    }
  }
  return setOfNumbers;
};
console.log(luckyNumbers(8));
