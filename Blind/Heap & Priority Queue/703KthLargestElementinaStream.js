// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Implement KthLargest class:
// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
// int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

// Example 1:
// Input
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// Output
// [null, 4, 5, 5, 8, 8]

// Explanation
// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3);   // return 4
// kthLargest.add(5);   // return 5
// kthLargest.add(10);  // return 5
// kthLargest.add(9);   // return 8
// kthLargest.add(4);   // return 8

// Constraints:
// 1 <= k <= 104
// 0 <= nums.length <= 104
// -104 <= nums[i] <= 104
// -104 <= val <= 104
// At most 104 calls will be made to add.
// It is guaranteed that there will be at least k elements in the array when you search for the kth element.

/**
 * @param {number} k
 * @param {number[]} nums
 * Time complexity: O(logn), sort
 * Space complexity: O(n
 */
var KthLargest = function (k, nums) {
    this.arr = nums.sort((a, b) => b - a);
    this.kth = k;
};

/** 
 * @param {number} val
 * @return {number}
 * Time complexity: O(logn), binary search
 * Spae complexity: O(n), we add up to n more
 */
KthLargest.prototype.add = function (val) {
    let left = 0, right = this.arr.length - 1;

    // binary search
    while (left <= right) {
        const mid = (left + right) >> 1;
        const num = this.arr[mid];
        if (val < num) {
            left = mid + 1;
        }
        else if (val > num) {
            right = mid - 1;
        }
        else {
            left = mid;
            break;
        }
    }

    this.arr.splice(left, 0, val);
    this.len++;
    return this.arr[this.kth - 1];

};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     * @constructor
     * Time complexity: O(nlogk)
     * Space complexity: O(k)
    constructor(k, nums) {
        this.heap = new MinHeap(nums, k);
    }

    /**
     * @param {number} val
     * @return {number}
     * Time complexity: O(k)
     * Space complexity: O(1)
     */
    add(val) {
        this.heap.add(val);
        return this.heap.getMin();
    }
}

class MinHeap {
    /**
     * @param {number[]} nums
     * @param {number} size
     * @constructor
     */
    constructor(nums, size) {
        this.size = size;
        this.length = 0;
        this.heap = [];
        for (const num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} num
     * @return {void}
     */
    add(num) {
        if (this.length < this.size) {
            ++this.length;
            this.heap.push(num);
            this.siftUp(this.length - 1);
        } else if (num > this.heap[0]) {
            this.heap[0] = num;
            this.siftDown(0);
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.heap[0];
    }

    /**
     * @param {number} i
     * @return {void}
     */
    siftDown(i) {
        const length = this.length;
        const heap = this.heap;
        let k = i * 2 + 1;
        while (k < length) {
            if (k + 1 < length && heap[k + 1] < heap[k]) {
                ++k;
            }
            if (heap[i] <= heap[k]) {
                return;
            }
            [heap[i], heap[k]] = [heap[k], heap[i]];
            i = k;
            k = i * 2 + 1;
        }
    }

    /**
     * @param {number} i
     * @return {void}
     */
    siftUp(i) {
        const heap = this.heap;
        let p = Math.floor((i - 1) / 2);
        while (i > 0 && heap[i] < heap[p]) {
            [heap[i], heap[p]] = [heap[p], heap[i]];
            i = p;
            p = Math.floor((i - 1) / 2);
        }
    }
}
