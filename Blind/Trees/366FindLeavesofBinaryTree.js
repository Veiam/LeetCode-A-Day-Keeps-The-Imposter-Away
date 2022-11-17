// Given the root of a binary tree, collect a tree's nodes as if you were doing this:
// Collect all the leaf nodes.
// Remove all the leaf nodes.
// Repeat until the tree is empty.

// Example 1:
// Input: root = [1,2,3,4,5]
// Output: [[4,5,3],[2],[1]]
// Explanation:
// [[3,5,4],[2],[1]] and [[3,4,5],[2],[1]] are also considered correct answers since per each level it does not matter the order on which elements are returned.

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Constraints:
// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100
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
 * @return {number[][]}
 */
var findLeaves = function (root) {
    const res = [];

    function dfs(node) {
        if (node == null) {
            return 0;
        }
        let index = Math.max(dfs(node.left), dfs(node.right));
        if (res[index] == null) {
            res[index] = [];
        }
        res[index].push(node.val);
        return index + 1;
    }
    dfs(root);
    return res;
};