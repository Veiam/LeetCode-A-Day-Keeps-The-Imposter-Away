// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

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
 * Time complexity and space complexity: O(n), DFS
 */
var levelOrder = function (root) {
    levels = [];

    function helper(node, level) {
        // check for empty node
        if (node) {
            // initialize level's empty array
            if (levels.length === level) {
                levels.push([]);
            }
            // push current node val to level
            levels[level].push([node.val]);
            // traverse left and level + 1
            helper(node.left, level + 1);
            // traverse right and level + 1;
            helper(node.right, level + 1);
        }
    }

    // initial call
    helper(root, 0);
    return levels;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 * Time complexity and space complexity: O(n), BFS
 */
var levelOrder = function (root) {
    const res = [];
    const queue = [];

    if (root) {
        queue.push(root);
    } else {
        return [];
    }

    while (queue.length) {
        const len = queue.length;
        const level = [];
        for (let i = 0; i < len; i++) {
            const curr = queue.shift();
            level.push(curr.val);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
        res.push(level);
    }
    return res;
};