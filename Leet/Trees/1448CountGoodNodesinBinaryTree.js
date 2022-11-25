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
 * @return {number}
 * Time complexity: O(n), we visit each node once
 * Space compelxity: O(n), recursive stacks
 */
var goodNodes = function (root) {
    let res = 0;

    function traverse(node, max) {
        if (!node) {
            return;
        }

        // increase the count if current max is le
        if (max <= node.val) {
            res++;
        }

        // keep track of max
        max = Math.max(max, node.val);

        // traverse left and right
        traverse(node.left, max);
        traverse(node.right, max);
    }

    traverse(root, root.val);

    return res;
};

/**
 * @param {TreeNode} root
 * @return {number}
 * Time complexity: O(n), we vist each node once
 * Space complexity: O(n), queue size
 */
var goodNodes = function (root) {
    let res = 0;
    const queue = [[root, root.val]];

    while (queue.length) {
        let [node, max] = queue.pop();

        // see if current node is a good node
        if (max <= node.val) {
            res++;
        }

        max = Math.max(max, node.val);
        if (node.left) {
            queue.push([node.left, Math.max(max, node.val)]);
        }

        if (node.right) {
            queue.push([node.right, Math.max(max, node.val)]);
        }
    }

    return res;
};