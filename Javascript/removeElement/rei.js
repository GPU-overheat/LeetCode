/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function (nums, val) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
    i++;
  }
  return nums.length;
};

// let nums = [1, 2, 3, 2, 4];
// let target = 2;
// console.log(nums);

// removeElement(nums, target);
// console.log(nums);
