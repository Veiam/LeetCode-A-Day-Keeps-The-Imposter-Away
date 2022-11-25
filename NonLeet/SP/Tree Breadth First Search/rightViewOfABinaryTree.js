// Given a binary tree, return an array containing nodes in its right view.
// The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.

class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const tree_right_view = function (root) {
    const queue = [root];
    const result = [];
    while (queue.length !== 0) {
        const queueLength = queue.length;
        for (let i = 0; i < queueLength; i++) {
            const current = queue.shift();
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
            // if it is the last node of this level, add it to the result
            if (i == queueLength - 1) {
                result.push(current.value);
            }
        }
    }

    return result;
};


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.left.left.left = new TreeNode(3);
console.log("Tree right view: " + tree_right_view(root))
