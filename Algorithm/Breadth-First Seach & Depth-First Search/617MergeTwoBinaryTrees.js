// You are given two binary trees root1 and root2.
// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
// You need to merge the two trees into a new binary tree.
// The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node.
// Otherwise, the NOT null node will be used as the node of the new tree.
// Return the merged tree.
// Note: The merging process must start from the root nodes of both trees.

// Example 1:
// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]

// Example 2:
// Input: root1 = [1], root2 = [1,2]
// Output: [2,2]

// Constraints:
// The number of nodes in both trees is in the range [0, 2000].
// -10^4 <= Node.val <= 10^4

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * DFS
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 * 
 * Time complexity : O(m). A total of mm nodes need to be traversed.
 * Here, mm represents the minimum number of nodes from the two given trees.
 * Space complexity : O(m). The depth of the recursion tree can go upto m in the case of a skewed tree.
 * In average case, depth will be O(logm).
 */
const mergeTrees = function (root1, root2) {
    // if root1 is empty then return root2
    // if root2 is empty then return root1
    if(!root1 || !root2){
        return root1 === null ? root2 : root1;
    }
    // merge
    root1.val += root2.val;
    // recursively merge left
    root1.left = mergeTrees(root1.left, root2.left);
    // recursively merge right
    root1.right = mergeTrees(root1.right, root2.right);

    // return merged root1
    return root1;
};

/**
 * BFS
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 * 
 * Time complexity : O(n). We traverse over a total of nn nodes.
 * Here, nn refers to the smaller of the number of nodes in the two trees.
 * Space complexity : O(n). The depth of stack can grow upto n in case of a skewed tree.
 */
const mergeTrees = function (root1, root2) {
    // if root1 is empty then return root2
    if (root1 === null)
        return root2;
    // if root2 is empty then return root1
    if (root2 === null)
        return root1;

    // create a stack
    const stack = [[root1, root2]];

    // while stack is not empty
    while (stack.length) {
        // get the first element
        const node = stack.pop();

        // if either is null then no need to merge
        if (node[0] === null || node[1] === null) {
            continue;
        }

        // merge
        node[0].val += node[1].val;

        // merge left
        if (node[0].left === null)
            node[0].left = node[1].left;
        else
            stack.push([node[0].left, node[1].left]);

        // merge right
        if (node[0].right === null)
            node[0].right = node[1].right;
        else
            stack.push([node[0].right, node[1].right]);
    }
    
    // return merged
    return root1;
};
