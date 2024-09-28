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
 * @return {number[]}
 */


function inorderTraversal(root) {
    let result = [];
    let stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        result.push(current.val);

        current = current.right;
    }

    return result;
}
// Recursive approach
// let inorderTraversal = function(node) {
//     let result = [];

//     function traverse(node) {
//         if (!node) return;
//         traverse(node.left);
//         result.push(node.val);
//         traverse(node.right);
//     }

//     traverse(node);
//     return result;
// };
