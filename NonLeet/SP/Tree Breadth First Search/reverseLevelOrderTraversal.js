// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order,
// i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.
class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const traverse = function (root) {
    if (!root) {
        return;
    }
    // initialize a queue with root
    const queue = [root];
    const result = [];

    while (queue.length !== 0) {
        // Get the current queue length before dequeue
        const queueLength = queue.length;
        // Array to store current level;
        const currLevel = [];
        // when the loop begins, the length of the queue represents the # of nodes at the levle.
        // loop through to exhaust all optiosn and only to include nodes at current level
        for (let i = 0; i < queueLength; i++) {
            // get next node
            const current = queue.shift();

            // add left to queue if it exists
            if (current.left) {
                queue.push(current.left);
            }

            // add right to the queue if it exists
            if (current.right) {
                queue.push(current.right);
            }

            // After we add left and right for current
            // We add the current value to current level
            currLevel.push(current.value);
        }
        // Put the current level to the first index
        result.unshift(currLevel);
    }
    return result;
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Reverse level order traversal: ${traverse(root)}`);
