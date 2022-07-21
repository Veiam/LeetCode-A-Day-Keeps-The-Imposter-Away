// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
// Input: p = [1, 2, 3], q = [1, 2, 3]
// Output: true

// Example 2:
// Input: p = [1, 2], q = [1, null, 2]
// Output: false

// Example 3:
// Input: p = [1, 2, 1], q = [1, 1, 2]
// Output: false

// Constraints:
// The number of nodes in both trees is in the range[0, 100].
// - 104 <= Node.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * Time and Space Complexity: O(n), each node and call stack
 */
var isSameTree = function (p, q) {
    if (!p || !q) {
        return p === q ? true : false;
    }

    if (p.val !== q.val) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * Time and Space Complexity: O(n), each node
 */
var isSameTree = function (p, q) {
    if (!p || !q) {
        return p === q ? true : false;
    }

    const pTree = [p];
    const qTree = [q];

    while (pTree.length && qTree.length) {
        const pNode = pTree.shift();
        const qNode = qTree.shift();

        // Check if they are equal
        if (pNode.val !== qNode.val) {
            return false;
        }

        // If at least one of them exists
        if (pNode.left || qNode.left) {
            // but one of them does not exist
            if (!pNode.left || !qNode.left) {
                return false;
            }

            pTree.push(pNode.left);
            qTree.push(qNode.left);
        }

        if (pNode.right || qNode.right) {
            if (!pNode.right || !qNode.right) {
                return false;
            }


            pTree.push(pNode.right);
            qTree.push(qNode.right);
        }

    }

    return true;


};