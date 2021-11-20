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
 * @param {number} targetSum
 * @return {boolean}
 * Time Complexity: O(n), wher n is the number of nodes
 * Space Complexity: O(n) where n is the height of the tree
 */
const hasPathSum = function (root, targetSum) {
    function sum(node, total) {
        // we found a leaf
        if (node && !node.left && !node.right) {
            return total + node.val === targetSum;
        }
        // not a leaf, check both left and right recursively
        else if (node) {
            return sum(node.left, total + node.val) || sum(node.right, total + node.val);
        }
        // null root
        else
            return false;

    }

    return sum(root, 0);
};