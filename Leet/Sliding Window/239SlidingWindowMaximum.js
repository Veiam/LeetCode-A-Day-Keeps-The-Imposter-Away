// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.

// Example 1:
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

function Node(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
}

// Monotonically Decreasing Queue
function Deque() {
    this.left = null;
    this.right = null;
    this.size = 0;

    // Add to far right
    this.pushRight = function (value) {
        let node = new Node(value);
        if (this.size === 0) {
            this.left = node;
        }
        else {
            this.right.next = node;
            node.prev = this.right;
        }
        this.right = node;
        this.size++;
        return this.size;
    }

    // Remove right
    this.popRight = function () {
        if (this.size === 0) {
            return null;
        }
        const removedNode = this.right;
        this.right = this.right.prev;
        if (this.right) {
            this.right.next = null;
        }
        this.size--;
        return removedNode;
    }

    // Add to far left
    this.pushLeft = function (value) {
        let node = new Node(value);
        if (this.size === 0) {
            this.right = node;
        }
        else {
            this.left.prev = node;
            node.next = this.left;
        }
        this.left = node;
        this.size++;
        return this.size;
    }
    // Remove left
    this.popLeft = function () {
        if (this.size === 0)
            return null;

        const removedNode = this.left;
        this.left = this.left.next;
        if (this.left) {
            this.left.prev = null;
        }
        this.size--;
        return removedNode;
    }
}

var maxSlidingWindow = function (nums, k) {
    let deque = new Deque();
    const res = [];
    let left = 0, right = 0;

    // loop through
    while (right < nums.length) {
        // while deque has right and its value is less than current index value, remove it
        while (deque.right && nums[deque.right.value] < nums[right]) {
            deque.popRight();
        }
        // add current index to dequeue, notice we are adding the position and not value
        deque.pushRight(right);

        // remove left val from window, if it's not window anymore
        if (left > deque.left.value) {
            deque.popLeft();
        }

        // if current window is larger than or equal to window size
        if (right + 1 >= k) {
            // push the far left which would be current max
            res.push(nums[deque.left.value]);
            // shrink window
            left++;
        }
        // extend window
        right++;
    }

    return res;
};