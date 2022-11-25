// Given a binary tree, populate an array to represent its zigzag level order traversal.
// You should populate the values of all nodes of the first level from left to right,
// then right to left for the next level and keep alternating in the same manner for the following levels.
class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


const traverse = function (root) {
    const result = [];

    if (!root) {
        return;
    }
    // intialize a queue with a root
    const queue = [root];
    let leftToRight = true;
    while (queue.length !== 0) {
        const queueLength = queue.length;
        const level = [];
        for (let i = 0; i < queueLength; i++) {
            const current = queue.shift();
            const reorder = [];

            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
            // when it's left to right push as is
            if (leftToRight) {
                level.push(current.value);
            }
            // when it's not, put it in the beginning
            else {
                level.unshift(current.value);
            }

        }
        result.push(level);
        leftToRight = !leftToRight
    }
    return result;
};


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(`Zigzag traversal: ${traverse(root)}`);
