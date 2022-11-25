// Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.class TreeNode {
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next = null;
    }

    // level order traversal using 'next' pointer
    print_level_order() {
        console.log("Level order traversal using 'next' pointer: ");
        let nextLevelRoot = this;
        while (nextLevelRoot !== null) {
            let current = nextLevelRoot;
            nextLevelRoot = null;
            while (current != null) {
                process.stdout.write(`${current.val} `);
                if (nextLevelRoot === null) {
                    if (current.left !== null) {
                        nextLevelRoot = current.left;
                    } else if (current.right !== null) {
                        nextLevelRoot = current.right;
                    }
                }
                current = current.next;
            }
            console.log();
        }
    }
};

const connect_level_order_siblings = function (root) {
    const queue = [root];

    while (queue.length !== 0) {
        const level = [];
        const queueLength = queue.length;
        let prev = null;
        for (let i = 0; i < queueLength; i++) {
            const current = queue.shift();
            // connect all nodes of this level
            if (prev !== null) {
                prev.next = current;
            }
            prev = current;

            // insert the children of current node in the queue
            if (current.left !== null) {
                queue.push(current.left);
            }
            if (current.right !== null) {
                queue.push(current.right);
            }
        }
    }
};


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_level_order_siblings(root);

root.print_level_order()
