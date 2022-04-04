// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]

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
// Output: [2,1]

// Constraints:
// The number of the nodes in the tree is in the range [0, 100].
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
 * DFS
 * BOTTOM to TOP
 * LEFT to RIGHT
 * @param {TreeNode} root
 * @return {number[]}
 * Time Complexity: O(n), where n is number of nodes
 * Space Complexity: O(n), where n is number of nodes
 */
const postorderTraversal = function (root) {
    const stack = [], traversal = [];

    if (!root)
        return traversal;

    stack.push(root);

    while (stack.length) {
        const cur = stack.pop();
        // Put the last in first
        traversal.unshift(cur.val);
        // Reverse of Preorder Traversal, we start from left
        if (cur.left) {
            stack.push(cur.left);
        }
        if (cur.right) {
            stack.push(cur.right);
        }
    }

    return traversal;
};

/**
 * DFS
 * BOTTOM to TOP
 * LEFT to RIGHT
 * @param {TreeNode} root
 * @return {number[]}
 * Time Complexity: O(n), where n is number of nodes
 * Space Complexity: O(n), where n is number of nodes
 */
const postorderTraversal = function (root) {
    const res = [];

    function postorder(node) {

        if (node.left) {
            postorder(node.left);
        }
        if (node.right) {
            postorder(node.right);
        }
        res.push(node.val);
    }
    if (root) {
        postorder(root);
    }
    return res;
};