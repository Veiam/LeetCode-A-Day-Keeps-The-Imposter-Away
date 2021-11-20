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
 * @param {number} val
 * @return {TreeNode}
 * Time Complexity: O(logn), BST
 * Space Complexity: O(1), constant space is used
 */
const insertIntoBST = function (root, val) {
    let temp = root;
    const node = new TreeNode(val);

    if (!temp)
        return new TreeNode(val);

    while (temp) {
        // if either is empty
        if (!temp.left || !temp.right) {
            // check right
            if (temp.val < val && !temp.right) {
                temp.right = node;
                return root;
            }
            // check left
            else if (temp.val > val && !temp.left) {
                temp.left = node;
                return root;
            }
        }
        // go right
        if (temp.val < val) {
            temp = temp.right;
        }
        // go left
        else {
            temp = temp.left;
        }
    }
};