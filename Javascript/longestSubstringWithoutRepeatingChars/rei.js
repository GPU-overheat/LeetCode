// /**
//  * @param {string} s
//  * @return {number}
//  */

let lengthOfLongestSubstring = function (s) {
  let charMap = new Map();
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    if (charMap.has(s[end])) {
      start = Math.max(charMap.get(s[end]) + 1, start);
    }
    charMap.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};

// Example usage
let result = lengthOfLongestSubstring("pwwkew");
console.log(result); // Output: 3 (The longest substring is 'wke')
