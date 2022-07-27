/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 * Time complexity: O(n), stringify takes O(n)
 * Space complexity: O(1), constant space
 */
 var serialize = function(root) {
    return JSON.stringify(root);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 * Time complexity: O(n), parse takes O(n)
 * Space complexity: O(1), constant space
 */
var deserialize = function(data) {
    return JSON.parse(data);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */