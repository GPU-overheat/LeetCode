/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function(x) {
  if (x == 1 || x == 0) return x;
  if (x == 2) return 1;
  for (let i = 0; i < x / 2 + 1; i++) {
    if (i * i == x) return i;
    if (i * i > x) return i - 1;
  }
};

// let mySqrt = function (x) {
//   return Math.floor(Math.sqrt(x));
// };
