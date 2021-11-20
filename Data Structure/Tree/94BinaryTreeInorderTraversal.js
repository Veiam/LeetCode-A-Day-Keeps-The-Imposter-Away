// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// Example 4:
// Input: root = [1,2]
// Output: [2,1]

// Example 5:
// Input: root = [1,null,2]
// Output: [1,2]

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
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
 * DFS LEFT to RIGHT
 * @param {TreeNode} root
 * @return {number[]}
 * Time Complexity: O(n), where n is number of nodes
 * Space Complexity: O(n), where n is number of nodes
 */
const inorderTraversal = function (root) {
    const stack = [], traversal = [];

    if (!root)
        return traversal;

    // Loop until root does not exist or we have nothing in stack
    while (root || stack.length) {
        // Get left until we can't
        while (root) {
            stack.push(root);
            root = root.left;
        }
        // Get the left most node
        root = stack.pop();
        // Add it to the traversal result
        traversal.push(root.val);
        // Set root to root.right then loop
        root = root.right;
    }

    return traversal;
};