// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
// Return the number of good nodes in the binary tree.

// Example 1:
// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.

// Example 2:
// Input: root = [3,3,null,4,2]
// Output: 3
// Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.

// Example 3:
// Input: root = [1]
// Output: 1
// Explanation: Root is considered as good.

// Constraints:
// The number of nodes in the binary tree is in the range [1, 10^5].
// Each node's value is between [-10^4, 10^4].

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
 * Time complexity: O(n), we visit each node once
 * Space complexity: O(n), at max, we keep diameter worth of nodes in queue
 */
var rightSideView = function (root) {
    if (root == null)
        return [];
    let queue = [root];
    let res = [];

    while (queue.length) {
        const len = queue.length;
        let farRight = null;
        // loop through
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            // first one is always far right
            if (farRight === null) {
                farRight = node.val;
            }
            // push the right first
            // if we want to push left first then we can retrieve far right by arr[arr.length-1];
            if (node.right) {
                queue.push(node.right);
            }
            if (node.left) {
                queue.push(node.left);
            }
        }
        res.push(farRight);
    }

    return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 * Time complexity: O(n), we vist each node once
 * Space compleity: O(n), recursive stack
 */
var rightSideView = function (root) {
    const res = [];

    function helper(node, level) {
        if (!node) {
            return;
        }

        if (res[level] == null) {
            res[level] = node.val;
        }

        helper(node.right, level + 1);
        helper(node.left, level + 1);
    }

    helper(root, 0);

    return res;
};