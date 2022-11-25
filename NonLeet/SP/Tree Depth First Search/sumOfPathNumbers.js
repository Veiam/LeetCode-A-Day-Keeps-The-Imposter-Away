// Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number.
// Find the total sum of all the numbers represented by all paths.
class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


const find_sum_of_path_numbers = function (root) {
    function findSumOfPathNumbers(currentNode, totalSum) {
        if (currentNode == null) {
            return 0;
        }
        // calculate the path number of the current node
        totalSum *= 10;
        totalSum += currentNode.value;
        // if the current node is a leaf, return the current path sum
        if (currentNode.left == null && currentNode.right == null) {
            return totalSum;
        }
        let left = 0, right = 0;
        // traverse the left and the right sub-tree
        return findSumOfPathNumbers(currentNode.left, totalSum) + findSumOfPathNumbers(currentNode.right, totalSum);

    }
    return findSumOfPathNumbers(root, 0);
};



const root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)
