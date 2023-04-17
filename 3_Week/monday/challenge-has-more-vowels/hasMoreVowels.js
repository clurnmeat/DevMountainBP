// Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters. If the phrase is over half vowels, it should return true:

const hasMoreVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const wrdArr = word.split("");
  let counter = 0;

  wrdArr.forEach((el) => {
    if (vowels.includes(el.toLowerCase())) {
      counter++;
    }
  });

  if (counter >= wrdArr.length / 2){
    return true
  }else {
    return false
  };
};


console.log(hasMoreVowels(`Aal`))

