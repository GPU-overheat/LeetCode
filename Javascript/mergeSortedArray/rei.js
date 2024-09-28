/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function(nums1, m, nums2, n) {
    if (m === 0 && n != 0) num1 = nums2;
    nums1.length = m;
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
};