/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let res = -1;
    function dfs(node) {
        if (node == null) {
            return 0;
        }
        let sum = 0;
        // checks left to see if the left node matches p or q
        sum += dfs(node.left);
        // checks right to see if the right node matches p or q
        sum += dfs(node.right);
        // check if current node matches p or q
        sum += (node === p || node === q) ? 1 : 0;
        if (sum === 2) {
            res = node;
            return;
        }
        return (sum);
    }

    dfs(root)
    return res;

};