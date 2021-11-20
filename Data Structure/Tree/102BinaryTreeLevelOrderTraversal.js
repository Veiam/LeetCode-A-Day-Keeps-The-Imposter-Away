// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3, 9, 20, null, null, 15, 7]
// Output: [[3], [9, 20], [15, 7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range[0, 2000].
// - 1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * BFS
 * @param {TreeNode} root
 * @return {number[][]}
 * Time Complexity: O(n), where N is the number of nodes
 * Space COmplexity: O(n), where N is the number of nodes
 */
const levelOrder = function (root) {
    const queue = [], traversal = [];

    if (!root)
        return traversal;

    queue.push(root);

    while (queue.length) {
        // we only want to go through the current level
        const len = queue.length;
        const level = [];
        for (let i = 0; i < len; i++) {
            const current = queue.shift();
            level.push(current.val);
            if (current.left)
                queue.push(current.left);
            if (current.right)
                queue.push(current.right);
        }
        // push the current level
        traversal.push(level);
    }

    return traversal;
};