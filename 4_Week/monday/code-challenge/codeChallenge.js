let alphabet = "abcdefghijklmnopqrstuvwxyz";

let alphabetList = alphabet.split("");

const myFunction = (string) => {
  let number = Number(string.split("")[0]);
  const revealed = [];

  for (let i = 0; i < alphabetList.length; i++) {
    let alphabetChar = alphabetList[i];
    for (let j = 1; j < string.length; j++) {
      let stringChar = string[j];
      if (stringChar === alphabetList[i - number]) {
        revealed.push(alphabetChar);
      }
    }
  }
  return revealed.join("");
};

console.log(myFunction("1a"));
