//Given a string, find the length of the longest substring in it with no more than K distinct characters.


const longest_substring_with_k_distinct = function(str, k) {
    // TODO: Write your code here
    let max = 0;
    let start = 0;
    let right = 0;
    let hash = {};
    for (; right < str.length; right++) {
        hash[str[right]]  = hash[str[right]] ? ++hash[str[right]] : 1;
        while( Object.keys(hash).length > k) {
            hash[str[start]] -=1;
            if (hash[str[start]] === 0){
                delete hash[str[start]];
            }
            start++;
        }
        max = Math.max(max, right - start + 1);
    }
    return max;
  };

  console.log(longest_substring_with_k_distinct("araaci", 2))