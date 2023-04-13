// This function checks if a given word is a palindrome or not.
const isPalindrom = (wrd) => {
  return () => {
    // Splitting the word into an array of characters, reversing it and joining it back to form a new string.
    let strng2 = wrd.split("");
    strng2.reverse();
    newwrd = strng2.join("");
    console.log(newwrd);
    // Checking if the original word and the reversed word are equal or not.
    if (wrd === newwrd) {
      console.log(true);
      return;
    } else {
      console.log(false);
      return;
    }
  };
};

// Creating a closure by calling the isPalindrom function with the argument "racecar" and storing the returned function in the variable check.
let check = isPalindrom("racecar");
// Calling the returned function to check if "racecar" is a palindrome or not.
check();
