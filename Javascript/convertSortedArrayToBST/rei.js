/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

/* the idea here is quite simple, we have a sorter array, we will push
the first half of the array to the left nodes and the second half of
the array to the right nodes. since in a BST the left nodes are smaller
or equal to the parent while the right are greater or equal to the parent
and since we have a sorted array the smaller value will be in the left.*/
let sortedArrayToBST = function (nums) {
  
  if (!nums.length) return null;

  const half = Math.floor(nums.length / 2);

  const root = new TreeNode(nums[half]);

  root.left = sortedArrayToBST(nums.slice(0, half));

  root.right = sortedArrayToBST(nums.slice(half + 1));

  return root;
};
