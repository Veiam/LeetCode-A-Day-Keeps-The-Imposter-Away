/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * BFS
 * @param {Node} root
 * @return {Node}
 * 
 * Time Complexity: O(N) since we process each node exactly once.
 * Note that processing a node in this context means popping the node from the queue and then establishing the next pointers.
 * Space Complexity: O(N). This is a perfect binary tree which means the last level contains N/2 nodes.
 * The space complexity for breadth first traversal is the space occupied by the queue
 * which is dependent upon the maximum number of nodes in particular level.
 * So, in this case, the space complexity would be O(N).
 */

const connect = function (root) {
    if (root === null)
        return root;
    // start with the root node
    const queue = [root];

    // As long as stack is not empty
    while (queue.length) {
        // initialize a current level length
        const length = queue.length;
        let prev = null;
        for (let i = 0; i < length; i++) {
            // get first element
            const current = queue.shift();

            if(prev){
                prev.next = current;
            }


            // push left
            if (current.left !== null)
                queue.push(current.left);
            // push right
            if (current.right !== null)
                queue.push(current.right);

            prev = current;
        }

    }
    return root;
};

/**
 * DFS Pointer
 * @param {Node} root
 * @return {Node}
 * 
 * Time Complexity: O(N) since we process each node exactly once.
 * Note that processing a node in this context means popping the node from the queue and then establishing the next pointers.
 * Space complexity : O(logm). The depth of the recursion tree can go upto logm in perfect binary tree.
 */
const connect = function (root) {
    if (!root)
        return root;

    // check left
    if (root.left)
        root.left.next = root.right;
    // check right
    if (root.right && root.next)
        root.right.next = root.next.left;

    connect(root.left);
    connect(root.right);

    return root;

};


/**
 * BFS Pointer
 * @param {Node} root
 * @return {Node}
 * 
 * Time Complexity: O(N) since we process each node exactly once.
 * Space Complexity: O(1) since we don't make use of any additional data structure
 * for traversing nodes on a particular level like the previous approach does.
 */
const connect = function (root) {
    if (root === null)
        return root;

    // Start with the root node. There are no next pointers
    // that need to be set up on the first level
    let node = root;

    // Once we reach the final level, we are done
    while (node.left !== null) {
        let head = node;

        // Iterate the "linked list" starting from the head
        // node and using the next pointers, establish the 
        // corresponding links for the next level
        while (head !== null) {
            // left to right
            head.left.next = head.right;

            // right to left
            if (head.next !== null) {
                head.right.next = head.next.left;
            }

            // Progress along the list (nodes on the current level)
            head = head.next;
        }
        // Move onto the next level
        node = node.left;
    }
    return root;
}