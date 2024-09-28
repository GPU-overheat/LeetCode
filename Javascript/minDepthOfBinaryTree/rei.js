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
 * @return {number}
 */

let minDepth = function (root) {
	if (root === null) return 0;

    if (root.left === null) return minDepth(root.right) + 1;

    if (root.right === null) return minDepth(root.left) + 1;
    
    const left = minDepth(root.left);
    const right = minDepth(root.right);
    
    return Math.min(left, right) + 1;
};
