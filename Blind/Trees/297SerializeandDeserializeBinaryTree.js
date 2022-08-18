/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 * Time complexity: O(n), stringify takes O(n)
 * Space complexity: O(1), constant space
 */
var serialize = function (root) {
    return JSON.stringify(root);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 * Time complexity: O(n), parse takes O(n)
 * Space complexity: O(1), constant space
 */
var deserialize = function (data) {
    return JSON.parse(data);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 * Time and Space Complexity: O(n)
 */
var serialize = function (root) {
    let serial = [];

    function helper(node) {
        if (node === null) {
            serial.push(null);
        }
        else {
            serial.push(node.val);
            helper(node.left);
            helper(node.right);
        }

    }

    helper(root);
    return serial;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 * Time and Space Complexity: O(n)
 */
var deserialize = function (data) {
    function helper() {
        if (data.length === 0)
            return null;
        const val = data.shift();

        if (val === null)
            return null;

        let node = new TreeNode(val);
        node.left = helper();
        node.right = helper();


        return node;
    }
    return helper();
};
