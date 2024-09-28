/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 1) return 1;
  let stairs = new Array(n);
  stairs[0] = 1;
  stairs[1] = 1;
  for (let i = 2; i <= n; i++) {
    stairs[i] = stairs[i - 1] + stairs[i - 2];
  }
  return stairs[n];
};
