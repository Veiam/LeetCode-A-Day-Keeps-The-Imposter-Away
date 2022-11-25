// Given a binary tree, find the length of its diameter.
// The diameter of a tree is the number of nodes on the longest path between any two leaf nodes.
// The diameter of a tree may or may not pass through the root.
// Note: You can always assume that there are at least two leaf nodes in the given tree.

class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

// if both left and right are available
// we loop through to find a length
// also start a new recursive call with length 0;
// else keep loop to get max length

class TreeDiameter {

    constructor() {
        this.treeDiameter = 0;
    }

    find_diameter(root) {
        this.calculate_height(root);
        return this.treeDiameter;
    }

    calculate_height(currentNode) {
        if (currentNode === null) {
            return 0;
        }

        // At every step, we need to find the height of both children of the current node.
        // For this, we will make two recursive calls similar to DFS.
        const leftTreeHeight = this.calculate_height(currentNode.left);
        const rightTreeHeight = this.calculate_height(currentNode.right);

        // if the current node doesn't have a left or right subtree, we can't have
        // a path passing through it, since we need a leaf node on each side

        if (leftTreeHeight !== 0 && rightTreeHeight !== 0) {
            // diameter at the current node will be equal to the height of left subtree +
            // the height of right sub-trees + '1' for the current node
            const diameter = leftTreeHeight + rightTreeHeight + 1;

            // update the global tree diameter
            this.treeDiameter = Math.max(this.treeDiameter, diameter);
        }

        // height of the current node will be equal to the maximum of the heights of
        // left or right subtrees plus '1' for(the current node
        return Math.max(leftTreeHeight, rightTreeHeight) + 1;
    }
};


const treeDiameter = new TreeDiameter()
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
root.left.left = null
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
root.right.left.right.left = new TreeNode(10)
root.right.right.left.left = new TreeNode(11)
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
