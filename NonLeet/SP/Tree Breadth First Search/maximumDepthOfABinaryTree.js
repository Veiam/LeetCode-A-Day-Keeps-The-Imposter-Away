// Given a binary tree, find its maximum depth (or height).
class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const find_minimum_depth = function (root) {
    const queue = [root];
    let depth = 0;
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
        }
        depth++;
    }
    return depth;
};



const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
