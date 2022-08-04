// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3, 9, 20, null, null, 15, 7]
// Output: 3

// Example 2:
// Input: root = [1, null, 2]
// Output: 2

// Example 3:
// Input: root = []
// Output: 0

// Example 4:
// Input: root = [0]
// Output: 1

// Constraints:
// The number of nodes in the tree is in the range[0, 104].
// - 100 <= Node.val <= 100

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
 * Time Compelxity: O(n), where n is number of nodes
 * Space Complexity: O(logn) if it's balanced O(n) if it's not balanced
 */
const maxDepth = function (root) {
    function traversal(node, depth) {
        if (node) {
            // get depth of left
            const left = traversal(node.left, depth + 1);
            // get depth of right
            const right = traversal(node.right, depth + 1);
            // get max
            depth = Math.max(left, right);
        }
        return depth;
    }

    return traversal(root, 0);
};

/**
 * @param {TreeNode} root
 * @return {number}
 * Time Compelxity: O(n), where n is number of nodes
 * Space Complexity: O(n), where n is number of nodes
 */
const maxDepth = function (root) {
    const queue = [];
    let depth = 0;

    if (!root)
        return 0;

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
        depth++;
    }

    return depth;
};