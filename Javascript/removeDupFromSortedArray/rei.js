/**
 * @param {number[]} nums
 * @return {number}
 */

let removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let k = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return (k + 1);
};


// doesn't solve the exercise but returns same k
// let removeDuplicates = function (nums) {
//   nums = new Set(nums);
//   nums = [...nums];
//   let k = nums.length;
//   return k;
// };

// let nums = [1, 2, 2, 3, 4];
// console.log(nums);

// let hm = removeDuplicates(nums);
// console.log(hm);

// console.log(nums);
