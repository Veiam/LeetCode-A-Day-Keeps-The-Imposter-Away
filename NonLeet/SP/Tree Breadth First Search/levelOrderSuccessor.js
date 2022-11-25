// Given a binary tree and a node, find the level order successor of the given node in the tree.
// The level order successor is the node that appears right after the given node in the level order traversal.

class TreeNode {

    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};


const find_successor = function (root, key) {
    const queue = [root];
    let keyFound = false;
    while (queue.length !== 0) {
        const queueLength = queue.length;
        for (let i = 0; i < queueLength; i++) {

            const current = queue.shift();

            // insert the children of current node in the queue
            if (current.left !== null) {
                queue.push(current.left);

            }

            if (current.right !== null) {
                queue.push(current.right);
            }
            // break if we have found the key
            if (current.val === key) {
                keyFound = true;
                break;
            }
        }
        if (keyFound) {
            return queue.shift();
        }
    }
};


const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
result = find_successor(root, 12)
if (result != null)
    console.log(result.val)
result = find_successor(root, 9)
if (result != null)
    console.log(result.val)
