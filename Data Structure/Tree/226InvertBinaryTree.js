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
 * @return {TreeNode}
 * Time Complexity: O(n), where n is number of nodes
 * Space Complexity: O(n), where n is numer of nodes
 */
const invertTree = function (root) {
    if (!root)
        return root;

    const stack = [root];

    while (stack.length) {
        const node = stack.shift();
        // flip
        [node.right, node.left] = [node.left, node.right];
        // add left
        if (node.left) {
            stack.push(node.left);
        }
        // add right
        if (node.right) {
            stack.push(node.right);
        }
    }

    return root;

};