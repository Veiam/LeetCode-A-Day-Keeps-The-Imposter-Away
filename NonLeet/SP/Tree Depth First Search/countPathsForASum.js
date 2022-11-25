// Given a binary tree and a number ‘S’, find all paths in the tree such that
// the sum of all the node values of each path equals ‘S’. Please note that
// the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).

class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


const count_paths = function (root, S) {
    function countPaths(currentNode, s) {
        if (currentNode == null) {
            return 0;
        }
        if (currentNode.left == null && currentNode.right == null && currentNode.value == s) {
            return 1;
        }
        if (currentNode.value > s) {
            return countPaths(currentNode.left, s) + countPaths(currentNode.right, s);
        }
        else {
            return countPaths(currentNode.left, s - currentNode.value) + countPaths(currentNode.right, s - currentNode.value);
        }
    }
    return countPaths(root, S);
};


const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has paths: ${count_paths(root, 11)}`)
