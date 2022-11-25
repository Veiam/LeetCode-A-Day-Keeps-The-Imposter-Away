// Given an array of integers nums, sort the array in ascending order and return it.
// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Example 1:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

// Example 2:
// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

// Constraints:
// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104
// Accepted
// 329K
// Submissions
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    const minHeap = new MinPriorityQueue();
    for (let num of nums) {
        minHeap.enqueue(num, num);
    }
    for (let num in nums) {
        nums[num] = minHeap.dequeue().element;
    }
    return nums;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (nums.length === 1) {
        return nums;
    }
    const half = nums.length >> 1;
    const left = sortArray(nums.slice(0, half));
    const right = sortArray(nums.slice(half));

    let p1 = 0, p2 = 0;
    while (p1 < left.length && p2 < right.length) {
        if (left[p1] <= right[p2]) {
            nums[p1 + p2] = left[p1];
            p1++;
        }
        else {
            nums[p1 + p2] = right[p2];
            p2++;
        }
    }

    while (p1 < left.length) {
        nums[p1 + p2] = left[p1];
        p1++;
    }
    while (p2 < right.length) {
        nums[p1 + p2] = right[p2];
        p2++;
    }
    return nums;
};