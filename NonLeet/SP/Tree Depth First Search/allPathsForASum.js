// Given a binary tree and a number ‘S’,
// find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const find_paths = function (root, sum) {
    let result = '';
    function findPaths(currentNode, sum, currentPath) {
        if (currentNode === null) {
            return;
        }

        // add the current node to the path
        currentPath.push(currentNode.value);

        // if the current node is a leaf and its value is equal to sum, save the current path
        if (currentNode.left == null && currentNode.right == null && sum == currentNode.value) {
            result += '[' + currentPath + ']';
        }
        else {
            // traverse the left sub-tree
            findPaths(currentNode.left, sum - currentNode.value, currentPath);
            // traverse the right sub-tree
            findPaths(currentNode.right, sum - currentNode.value, currentPath);
        }
        // remove the current node from the path to backtrack,
        // we need to remove the current node while we are going up the recursive call stack.
        currentPath.pop();
    }
    findPaths(root, sum, []);
    return result;
};



const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)
