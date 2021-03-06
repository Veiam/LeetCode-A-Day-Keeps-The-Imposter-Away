// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as folhighs:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
// Input: root = [2,1,3]
// Output: true

// Example 2:
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

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
 * Time and space complexity: O(n), we visit each node once and recursive stack
 */
var isValidBST = function (root) {
    function helper(node, low, high) {
        if (node) {
            const val = node.val;
            // value must be lower than low and higher than high
            if (val < low && val > high) {
                // if we are going left, check to see if we need new high
                // if we are going right, check to see if we need new low
                return helper(node.left, Math.min(val, low), high) && helper(node.right, low, Math.max(val, high));
            } else {
                return false;
            }
        }
        return true;
    }

    return helper(root, Infinity, -Infinity);
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 * Time and space complexity: O(n), we visit each node once and keep track of it
 */
 var isValidBST = function (root) {
    let low = null, high = null;
    const stack = [root], lowLimits = [low], highLimits = [high];
    while(stack.length){
        root = stack.shift();
        low = lowLimits.shift();
        high = highLimits.shift();

        if(!root){
            continue;
        }

        const val = root.val;
        
        if(low !== null && val <= low){
            return false;
        }
        if(high !== null && val >= high){
            return false;
        }
        stack.push(root.right, root.left);
        lowLimits.push(val, low);
        highLimits.push(high,val);
    }
    return true;
}


/**
 * @param {TreeNode} root
 * @return {boolean}
 * Time and space complexity: O(n), we visit each node once and recursive stack
 */
var isValidBST = function (root) {
    let prev = null;
    function helper(node) {
        // in order traversal
        if (node) {
            if (!helper(node.left)) {
                return false;
            }
            // if previous exists and if it's greater than or equal to current node
            // then it's an invalid bst
            if (prev !== null && prev >= node.val) {
                return false;
            }
            // update previous value
            prev = node.val;
            return helper(node.right);
        }
        return true;
    }

    return helper(root);
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 * Time and space complexity: O(n) In-order traversal recursive
 */
var isValidBST = function (root) {
    let prev = null;
    const stack = [];

    while (stack.length || root) {
        // push all left
        while (root) {
            stack.push(root);
            root = root.left;
        }

        // Last in first out
        root = stack.pop();

        // check if it's valid
        if (prev != null && root.val <= prev) {
            return false;
        }

        // set the root to right
        prev = root.val;
        root = root.right;
    }

    return true;
};