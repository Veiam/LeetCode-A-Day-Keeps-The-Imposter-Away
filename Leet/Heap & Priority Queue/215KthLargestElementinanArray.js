// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// You must solve it in O(n) time complexity.

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:
// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Time complexity: O(nlogk)
 * Space compelxity: O(k)
 */
var findKthLargest = function (nums, k) {
    let heap = new Heap(nums, k);
    return heap.getLargest();
};

class Heap {
    constructor(nums, k) {
        this.heap = [];
        this.size = k;
        this.length = 0;
        for (let num of nums) {
            this.insert(num);
        }
    }

    insert(num) {
        if (this.length < this.size) {
            this.heap.push(num);
            this.length++;
            this.siftUp(this.length - 1);
        } else if (num > this.heap[0]) {
            this.heap[0] = num;
            this.siftDown(0)
        }
    }

    getLargest() {
        return this.heap[0];
    }

    // move an element that is not properly positioned up the tree
    siftUp(pos) {
        let k = (pos - 1) >> 1;
        while (pos > 0 && this.heap[pos] < this.heap[k]) {
            [this.heap[pos], this.heap[k]] = [this.heap[k], this.heap[pos]];
            pos = k;
            k = (pos - 1) >> 1;
        }
    }

    // move an element that is not properly positioend down thre tree
    siftDown(pos) {
        let k = pos * 2 + 1;
        while (k < this.length) {
            if (k + 1 < this.length && this.heap[k + 1] < this.heap[k]) {
                k++;
            }

            if (this.heap[pos] <= this.heap[k]) {
                return;
            }

            [this.heap[pos], this.heap[k]] = [this.heap[k], this.heap[pos]];
            pos = k;
            k = pos * 2 + 1;
        }
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Time: O(n) average, O(n^2) worst
 * Space: O(1)
 */
var findKthLargest = function (nums, k) {
    k = nums.length - k;

    function quickSelect(l, r) {
        let pivot = nums[r];
        let pIndex = l;
        let index = l;
        while (l < r) {
            const left = nums[l];

            if (left <= pivot) {
                [nums[pIndex], nums[l]] = [nums[l], nums[pIndex]];
                pIndex++;
            }
            l++;
        }
        [nums[pIndex], nums[r]] = [nums[r], nums[pIndex]];

        if (pIndex === k) {
            return nums[k];
        }
        else if (pIndex < k) {
            return quickSelect(pIndex + 1, r);
        }
        else {
            return quickSelect(index, pIndex - 1);
        }
    }

    return quickSelect(0, nums.length - 1);
};


