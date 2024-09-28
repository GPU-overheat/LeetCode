/**
 * @param {number} x
 * @return {boolean}
 */

// solution 1 converting int to str
// let isPalindrome = function (x) {
//   let xStr = x.toString();
//   let revX = xStr.split("").reverse().join("");
//   revX = parseInt(revX);

//   if (revX === x) return true;
//   else return false;
// };

let isPalindrome = function(x) {
    let reversed = 0;
    let original = x;

    while (original > 0) {
        let lastDigit = original % 10;
        reversed = (reversed * 10) + lastDigit;
        original = Math.floor(original / 10);
    }

    return reversed === x;
}

