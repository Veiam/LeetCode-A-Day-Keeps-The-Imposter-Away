// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// Example 1:
// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

// Example 2:
// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

// Constraints:
// The number of nodes in the root tree is in the range [1, 2000].
// The number of nodes in the subRoot tree is in the range [1, 1000].
// -104 <= root.val <= 104
// -104 <= subRoot.val <= 104

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 * Time and space complexity: O(n), we check every node
 */
var isSubtree = function (root, subRoot) {
    function checkSameTree(p, q) {
        if (!p || !q) {
            return p === q ? true : false;
        }

        const pTree = [p];
        const qTree = [q];

        while (pTree.length && qTree.length) {
            const pNode = pTree.shift();
            const qNode = qTree.shift();

            if (pNode.val !== qNode.val) {
                return false;
            }

            if (pNode.left || qNode.left) {
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
    }
    const queue = [root];

    while (queue.length) {
        let node = queue.shift();
        // if subroot value is found then loop through to check
        if (node.val === subRoot.val) {
            // if they are not the same, just continue
            if (checkSameTree(node, subRoot)) {
                return true;
            }
        }
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }

    return false;
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 * Time and space complexity: O(n), we check every node and recursion stack if unbalanced
 */
var isSubtree = function (root, subRoot) {
    function isSameTree(p, q) {

        if (!p || !q) {
            return p === q ? true : false;
        }

        if (p.val !== q.val) {
            return false;
        }

        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    };

    if (!root) {
        return false;
    }


    if (root.val === subRoot.val) {
        // check if current root is subroot or if its children are subroot
        return isSameTree(root, subRoot) || (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot));
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};