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
 * TOP to BOTTOM
 * LEFT to RIGHT
 * @param {TreeNode} root
 * @return {number[]}
 * Time Complexity: O(n), where N is the number of nodes
 * Space Complexity: O(n), where N is the number of nodes
 */
const preorderTraversal = function (root) {
    const stack = [], traversal = [];

    // if root is empty, return empty array
    if (!root) {
        return traversal;
    }

    // add root node
    stack.push(root);

    // while stack isn't empty
    while (stack.length) {
        const cur = stack.pop();
        // add it to the return result
        traversal.push(cur.val);
        // check right first
        if (cur.right) {
            stack.push(cur.right);
        }
        if (cur.left) {
            stack.push(cur.left);
        }
    }
    return traversal;
};

/**
 * DFS
 * TOP to BOTTOM
 * LEFT to RIGHT
 * @param {TreeNode} root
 * @return {number[]}
 * Time Complexity: O(n), where N is the number of nodes
 * Space Complexity: O(n), where N is the number of nodes
 */
const preorderTraversal = function (root) {
    const res = [];

    function preorder(node) {
        res.push(node.val);
        if (node.left) {
            preorder(node.left);
        }
        if (node.right) {
            preorder(node.right);
        }
    }
    if (root) {
        preorder(root);
    }
    return res;
};