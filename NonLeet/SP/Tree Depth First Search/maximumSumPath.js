// Given a binary tree, find the root-to-leaf path with the maximum sum.

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


class MaximumSumPath {
    find_maximum_path_sum(root) {
        this.globalMaximumSum = -Infinity;
        this.find_maximum_path_recursive(root);
        return this.globalMaximumSum;
    }

    find_maximum_path_recursive(currentNode) {
        if (currentNode === null) {
            return 0;
        }

        let maxPathSumFromLeft = this.find_maximum_path_recursive(currentNode.left);
        let maxPathSumFromRight = this.find_maximum_path_recursive(currentNode.right);

        maxPathSumFromLeft = Math.max(maxPathSumFromLeft, 0);
        maxPathSumFromRight = Math.max(maxPathSumFromRight, 0);

        const localMaximumSum = Math.max(maxPathSumFromLeft + currentNode.val, maxPathSumFromRight + currentNode.val);

        this.globalMaximumSum = Math.max(this.globalMaximumSum, localMaximumSum);

        return Math.max(maxPathSumFromLeft + currentNode.val, maxPathSumFromRight + currentNode.val);
    }
}


const maximumSumPath = new MaximumSumPath();
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Maximum Path Sum: ${maximumSumPath.find_maximum_path_sum(root)}`);
