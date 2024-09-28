/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function (nums, target) {
  let k = nums.indexOf(target) === -1 ? 0 : nums.indexOf(target);
  if (nums.indexOf(target) === -1) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) i++;
      else if (nums[i] < target) {
        k = i + 1;
      }
    }
  }
  return k;
};

// let nums = [1, 3, 5, 6];
// let target = 7;
// console.log(searchInsert(nums, target));
