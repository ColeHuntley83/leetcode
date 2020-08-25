//write a function that takes in two integers and returns true if they have the same frequencies
//of digits and false otherwise

let x = 241;
let y = 422;

const sameFrequency = (num1, num2) => {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) return false;
  let counter = {};
  for (let char of str1) {
    counter[char] = ++counter[char] || 1;
  }
  for (let char of str2) {
      if (!(counter[char])) {
          return false;
      } else {
          counter[char]--;
      }
  }
  return true;
};

let result = sameFrequency(x, y);
console.log(result);
