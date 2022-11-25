// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
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
 * @return {boolean}
 * Time Complexity: O(n), where n is number of nodes
 * Spaec Complexity: O(n), where n is number of nodes
 */
const isSymmetric = function (root) {
    const queue = [root, root];

    while (queue.length) {
        let left = queue.shift();
        let right = queue.shift();
        // if both null
        if (!left && !right)
            continue;
        // if one is null
        else if (!left || !right)
            return false;
        else {
            if (left.val === right.val) {
                queue.push(left.left);
                queue.push(right.right);
                queue.push(left.right);
                queue.push(right.left);
            }
            else {
                return false;
            }
        }
    }
    return queue.length === 0 ? true : false;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 * Time Complexity: O(n), where n is number of nodes
 * Spaec Complexity: O(n), where n is number of nodes
 */
var isSymmetric = function (root) {
    function isMirror(node1, node2) {
        if (node1 === null && node2 === null) {
            return true;
        }
        if (node1 === null || node2 === null) {
            return false;
        }

        return (node1.val === node2.val) && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);

    }

    return isMirror(root, root);
};