/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    return [1, ...digits];
};



// let plusOne = function (digits) {
//   let num = parseInt(digits.join(""), 10);
//   num++;
//   return Array.from(String(num), Number);
// };

// let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

// console.log(plusOne(digits));
