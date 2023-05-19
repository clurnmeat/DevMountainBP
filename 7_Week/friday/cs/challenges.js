// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
const addToZero = (arr) => {
    let isZero = false
    for ( let i = 0; i < arr.length; i++ )
    {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                isZero = true;
            }
            }
            if (isZero) {
        }
    }
  return isZero;
};
// O(1)




console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True

// 2) Unique Characters

// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

const hasUniqueChars = ( strng ) =>
{
    let isUnique = true
    let strngArr = strng.split( '' )
    strngArr.forEach((element, index) => {
        if ( element == strngArr[ index + 1 ] )
        {
            isUnique = false
        } 
    });
   return isUnique
}
// O(1)





console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False


// 3) Pangram Sentence

// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.


const isPangram = ( strng ) =>
{
   return new Set(strng.toLowerCase().replace(/[^a-z]/g, "") ).size === 26
}
// O(1)




console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

// 4) Longest Word

// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const findLongestWord = ( arr ) =>
{
    let largestNum = 0
    arr.forEach( element =>
    {
        if ( element.length > largestNum )
        {
            largestNum = element.length
        }
    } )
    return largestNum
}
console.log(findLongestWord(["hi", "hello"]));
// -> 5
// O(1)