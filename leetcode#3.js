var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let current = "";
    
    for (let i = 0; i < s.length; i++) {
        current = current.substring(current.indexOf(s[i]) + 1) 
        console.log("current iteration before add:", i, `${s[i]}`, current);       
        current += s[i];
        console.log("current:", i, `${s[i]}`, current);
        
        if (current.length > longest) {
            longest = current.length;
        }
    }
    
    return longest;
};


console.log(lengthOfLongestSubstring("abcdefefefege"));


let x = 4;
let y = 3;
return y + x;
