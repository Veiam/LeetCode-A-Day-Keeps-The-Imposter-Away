// Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.

class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // tree traversal using 'next' pointer
    print_tree() {
        result = "Traversal using 'next' pointer: ";
        current = this;
        while (current != null) {
            result += current.value + " ";
            current = current.next;
        }
        console.log(result);
    }
};

const connect_all_siblings = function (root) {
    const queue = [root];
    let prev = null;

    while (queue.length !== 0) {
        const queueLength = queue.length;
        for (let i = 0; i < queueLength; i++) {
            const current = queue.shift();
            if (current.left !== null) {
                queue.push(current.left);
            }
            if (current.right !== null) {
                queue.push(current.right);
            }
            if (prev !== null) {
                prev.next = current;
            }
            prev = current;
        }
    }
    return root;
};


const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
connect_all_siblings(root)
root.print_tree()
