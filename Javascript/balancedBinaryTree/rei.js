/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isBalanced = function (root) {
  function checkHeight(node) {
    if (node === null) return 0;

    const left = checkHeight(node.left);
    const right = checkHeight(node.right);

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
   
	return Math.max(left, right) + 1;
  }

  return checkHeight(root) !== -1;
};
