// Given a binary tree, determine if it is height-balanced.
// For this problem, a height-balanced binary tree is defined as:
// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

// Constraints:
// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

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
 * @return {boolean}
 * Time complexity: O(nlogn), top-down recursion with Fibonacci meanders sequence
 * Space complexity: O(n), recursion stack
 */
var isBalanced = function (root) {
    // if root is empty then its balanced
    if (!root) {
        return true;
    }

    // check if left and right is balanced
    return Math.abs(traverse(root.left) - traverse(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right);
};

function traverse(head) {
    // if head is empty then height is 0
    if (!head) {
        return 0;
    }

    // calculate the height recurisvely
    return Math.max(traverse(head.left), traverse(head.right)) + 1;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 * Time complexity: O(n), bottom-up recursion
 * Space complexity: O(n). recursino stack
 */
var isBalanced = function (root) {
    const getHeight = (root) => {
        if (!root) return [0, true];

        const [leftHeight, leftBalanced] = getHeight(root.left);
        const [rightHeight, rightBalanced] = getHeight(root.right);

        const balanced =
            leftBalanced &&
            rightBalanced &&
            Math.abs(leftHeight - rightHeight) < 2;

        return [1 + Math.max(leftHeight, rightHeight), balanced];
    };

    const balanced = getHeight(root)[1];

    return balanced;
};