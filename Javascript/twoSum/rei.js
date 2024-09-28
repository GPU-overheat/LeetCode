/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) return [i, j];
    }
  }
};

// let twoSum1 = function (nums, target) {
  // let map = {}
  // for (let i = 0; i < nums.length; i++){
    // diff = target - nums[i];
    // if (diff in map) {
      // console.log(map[diff]);
      // 
      // return [map[diff], i]
    // }
    // map[nums[i]] = i 
  // }
// };
// 
// let nums = [2, 11, 8, 15];
// let target = 10;
// console.log(twoSum1(nums, target))