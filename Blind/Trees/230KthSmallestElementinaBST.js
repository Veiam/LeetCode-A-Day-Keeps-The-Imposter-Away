// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

// Constraints:
// The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104

// Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?

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
 * @param {number} k
 * @return {number}
 * Time and space complexity: O(n), we visit each node and recursive stack
 */
var kthSmallest = function (root, k) {
    const res = [];
    // in order traversal
    function helper(node) {
        if (node) {
            if (node.left) {
                helper(node.left);
            }
            res.push(node.val);

            if (node.right) {
                helper(node.right);
            }
        }
    }

    helper(root);
    return res[k - 1];
};

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * Time complexity: O(H + k), H is a tree height and k are number of elements.
 * Space complexity: O(H), to keep the stack where H is a tree height
 */
var kthSmallest = function (root, k) {
    const stack = [];
    const res = [];
    while (stack.length || root) {
        // in order traversal
        while (root) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        res.push(root.val);
        k--;

        // we are at the limit
        if (k === 0) {
            return res[k - 1];
        }

        root = root.right;
    }
};