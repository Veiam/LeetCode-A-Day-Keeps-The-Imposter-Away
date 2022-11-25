// Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.
class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};



const find_path = function (root, sequence) {
    let result = false;
    for (let i = 0; i < sequence.length; i++) {
        if (i == sequence.length - 1 && root.value == sequence[i]) {
            result = true;
        }
        if (root.left && root.left.value == sequence[i + 1]) {
            root = root.left;
        }
        else if (root.right && root.right.value == sequence[i + 1]) {
            root = root.right;
        }
        else {
            break;
        }
    }
    return result;
};



const root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)
