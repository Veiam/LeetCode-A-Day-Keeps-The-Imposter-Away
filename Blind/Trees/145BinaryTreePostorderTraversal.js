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

// Constraints:
// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    if (!root) {
        return [];
    }
    const stack = [root];
    const res = [];
    const visited = {};
    visited[root.val] = false;
    while (stack.length) {
        const node = stack.pop();
        if (visited[node.val]) {
            res.push(node.val);
        }
        else {
            visited[node.val] = true;
            stack.push(node);
            if (node.right) {
                stack.push(node.right);
                visited[node.right.val] = false;
            }
            if (node.left) {
                stack.push(node.left);
                visited[node.left.val] = false;
            }
        }

    }

    return res;
};