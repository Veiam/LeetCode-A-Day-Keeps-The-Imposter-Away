// Given a binary tree, determine if it is height-balanced.
// For this problem, a height-balanced binary tree is defined as:
// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

// Constraints:
// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

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
 * Time complexity: O(nlogn), top-down recursion with Fibonacci meanders sequence
 * Space complexity: O(n), recursion stack
 */
var isBalanced = function (root) {
    function getHeight(node) {
        // if it's empty node then there is no height
        if (!node) {
            return [0, true];
        }

        // recursively get height and balance
        const [leftHeight, leftBalanced] = getHeight(node.left);
        const [rightHeight, rightBalanced] = getHeight(node.right);

        // [maxHeight of eitehr path + node, left and right height different must be less than 2]
        return [Math.max(leftHeight, rightHeight) + 1, Math.abs(leftHeight - rightHeight) < 2 && leftBalanced && rightBalanced];
    }

    return getHeight(root)[1];
};