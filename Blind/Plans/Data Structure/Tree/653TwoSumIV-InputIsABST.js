// Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

// Example 1:
// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true

// Example 2:
// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false

// Example 3:
// Input: root = [2,1,3], k = 4
// Output: true

// Example 4:
// Input: root = [2,1,3], k = 1
// Output: false

// Example 5:
// Input: root = [2,1,3], k = 3
// Output: true

// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -104 <= Node.val <= 104
// root is guaranteed to be a valid binary search tree.
// -105 <= k <= 105

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * BFS
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 * Time Complexity: O(n), we visit each node once
 * Space Complexity: O(n), we need additional spaces to store each node and its value
 */
const findTarget = function (root, k) {
    const target = new Set(), queue = [root];
    // BFS
    while (queue.length) {
        const cur = queue.shift();
        const pair = k - cur.val;
        if (target.has(pair))
            return true;
        target.add(cur.val);
        if (cur.left)
            queue.push(cur.left);
        if (cur.right)
            queue.push(cur.right);
    }
    return false;

};

/**
 * DFS, We use an inorder traversal to get a sorted array then try to find sum
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 * Time Complexity: O(n), we visit each node once
 * Space Complexity: O(n), we need additional spaces to store each node and its value
 */
const findTarget = function (root, k) {
    const stack = [], traversal = [];

    // inorder traversal
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();

        traversal.push(root.val);
        root = root.right;
    }

    let start = 0, end = traversal.length - 1;

    // two pointer to find a sum
    while (start < end) {
        const sum = traversal[start] + traversal[end];

        if (sum === k)
            return true;
        else if (sum < k)
            start++;
        else
            end--;
    }

    return false;
};