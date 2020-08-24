let test = "Your PIN number is 1234!";

function charCount(str) {
  if (str === null || str.length === 0) return null;

  let map = {};
  let i;
  for (i = 0; i < str.length; i++) {
    if (str[i] == ' ' || str[i] == "!") {
      continue;
    }
    if (map[str[i]] > 0) {
      map[str[i]]++;
    } else {
      map[str[i].toLowerCase()] = 1;
    }
  }
  return map;
};

let result = charCount(test);
console.log(result)