// Write your code below
let hasUniqueChars = (wrd) => {
  let collector = [];
  for (let char of wrd) {
    if (collector.includes(char)) return false;
    else collector.push(char);
  }
  return true;
};

console.log(hasUniqueChars("helo")); // Output: true
