//given two strings write a function to determine of the second string is an anagram of the first string

let name1 = " ";
let name2 = " ";

const validAnagram = (word1, word2) => {
  if (word1.length !== word2.length) return false;
  let counter1 = {};
  let counter2 = {};
  for (let char of word1) {
    counter1[char] = ++counter1[char] || 1;
  }

  for (let char of word2) {
      counter2[char] = ++counter2[char] || 1;
  }
  for (char in counter1) {
      if (counter1[char] !== counter2[char]) return false;
  }
  return true;
};

let result = validAnagram(name1, name2);
console.log(result)
