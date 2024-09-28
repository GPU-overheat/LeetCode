/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

//this works but it lacks precision
// let addBinary = function (a, b) {
//   let sum = parseInt(a, 2) + parseInt(b, 2);
//   return sum.toString(2)
// };

//this works but code is way too long
// let addBinary = function (a, b) {
//     let result = "";
//     let carry = 0;
//     let i = a.length - 1;
//     let j = b.length - 1;

//     while (i >= 0 || j >= 0 || carry > 0) {
//         let sum = carry;
//         if (i >= 0) {
//             sum += parseInt(a[i]);
//             i--;
//         }
//         if (j >= 0) {
//             sum += parseInt(b[j]);
//             j--;
//         }
//         result = (sum % 2) + result;
//         carry = Math.floor(sum / 2);
//     }
//     return result;
// }

// this works best, with using BigInt precision is not lost.
let addBinary = function (a, b) {
	return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
};

// let a = '11'
// let b = '1'
// console.log(addBinary(a,b));
