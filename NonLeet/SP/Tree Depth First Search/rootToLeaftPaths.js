// Given a binary tree, return all root-to-leaf paths.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const find_paths = function (root) {
    let result = '';
    function findPaths(currentNode, currentPath) {
        if (currentNode === null) {
            return;
        }

        // add the current node to the path
        currentPath.push(currentNode.value);

        // if the current node is a leaf and its value is equal to sum, save the current path
        if (currentNode.left == null && currentNode.right == null) {
            result += '[' + currentPath + ']';
        }
        else {
            // traverse the left sub-tree
            findPaths(currentNode.left, currentPath);
            // traverse the right sub-tree
            findPaths(currentNode.right, currentPath);
        }
        // remove the current node from the path to backtrack,
        // we need to remove the current node while we are going up the recursive call stack.
        currentPath.pop();
    }
    findPaths(root, []);
    return result;
};



const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree paths: ${find_paths(root)}`)
