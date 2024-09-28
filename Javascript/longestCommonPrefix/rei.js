/**
 * @param {string[]} strs
 * @return {string}
 */

let longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
/* the idea here is to assume that strs[0] is our reference,
and check if it matches at index 0 if its not we remove one 
char from our reference then recheck if it matches the string at index 0
obviously if it matches with the first we go to the next str, if the prefix
is exhausted we simply return empty string*/
  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};
