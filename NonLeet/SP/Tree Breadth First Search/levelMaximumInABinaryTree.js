// Given a binary tree, find the largest value on each level of a binary tree.
class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const find_level_averages = function (root) {
    const result = [];
    const queue = [root];

    while (queue.length !== 0) {
        const queueLength = queue.length;
        let levelMax = 0;
        for (let i = 0; i < queueLength; i++) {
            const current = queue.shift();

            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
            levelMax = Math.max(levelMax, current.value);
        }
        result.push(levelMax);
    }

    return result;
};


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level averages are: ${find_level_averages(root)}`);
