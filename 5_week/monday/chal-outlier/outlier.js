const arr = [160, 3, 1719, 19, 11, 13, -21];

let answer = (param) => {
  //goes through the array and checks if even or odd, then pushes to the correct array
  let oddArr = [];
  let evenArr = [];
  param.forEach((el) => {
    if (el % 2 === 0) {
      evenArr.push(el);
    } else {
      oddArr.push(el);
    }
  });
  if (oddArr.length > evenArr.length) {
    return evenArr[0];
  } else {
    return oddArr[0];
  }
};
console.log(answer(arr));

//  [2, 4, 0, 100, 4, 11, 2602, 36]Should return: 11 (the only odd number)

//  Should return: 160 (the only even number)
