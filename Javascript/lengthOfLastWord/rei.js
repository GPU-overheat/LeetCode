/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function (s) {
	s = s.trim().split(" ");
	return s[s.length - 1].length;
  };

// let s = "Hello world ";

// console.log(lengthOfLastWord(s));
