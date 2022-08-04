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
 * @param {number} val
 * @return {TreeNode}
 * Time Complexity: O(logn) BST, every loop cuts the tree by half
 * Space Complexity: O(1), constant space is used
 */
const searchBST = function (root, val) {
    while (root) {
        if (root.val === val)
            return root;
        // check right if current val is less than target
        else if (root.val < val)
            root = root.right;
        // else check left
        else
            root = root.left;
    }
    return null;
};