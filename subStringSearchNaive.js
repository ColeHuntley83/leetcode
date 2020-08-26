// given a string of many substrings and a target string to search for. return the total number of times the substring is found in the string

function searchSubString(str, target) {
  let counter = 0;
  let index = 0;
  let i = 0;
  for (; i < str.length; i++) {
    let currentChar = str[i];
    if (currentChar == target[index]) {
      console.log("char", currentChar, "target char", target[index]);
      index++;
      console.log("index", index);
    }
    if (target.length === index) {
      index = 0;
      counter++;
    }
  }
  return counter;
}

console.log(searchSubString("zomgdfsgsjebhdomg omgsdefef ", "omg"));
