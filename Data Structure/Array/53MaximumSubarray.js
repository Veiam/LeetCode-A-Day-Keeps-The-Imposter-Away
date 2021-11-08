/**
 * Dynamic Programming, Kadane's Algorithm
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(n), where n is number of nums.
 * Space Complexity: O(1), constant space is used.
 */
const maxSubArray = function (nums) {
    // Initialize max subarray sum and current subarray sub with first index
    let cur = nums[0], max = cur;
    // Go through the nums
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        // We can either keep our current subarray + num or start a new array
        cur = Math.max(num, cur + num);
        // Store the max
        max = Math.max(max, cur);
    }
    return max;
};

/**
 * Divid and Conquer
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(n log n), where n is number of nums.
 * We go through every single number (n) and we are splitting the array in half (log n).
 * Space Complexity: O(log n), where n is number of nums.
 * Recursion stack of splitting the array in half (each time the array gets split in half, findSubArray is added to the stack).
 */
const maxSubArray = function (nums) {
    function findSubArray(left, right) {
        // Empty array
        if (left > right) {
            return -Infinity;
        }

        // Get the mid point
        const mid = Math.floor((left + right) / 2);
        let leftMax = 0, rightMax = 0, cur = 0;

        // Go through the left side
        for (let i = mid - 1; i >= left; i--) {
            // current array
            cur += nums[i]
            // store the max
            leftMax = Math.max(leftMax, cur);
        }

        // Reset current array and go through the right side
        cur = 0;
        for (let i = mid + 1; i <= right; i++) {
            cur += nums[i]
            rightMax = Math.max(rightMax, cur);
        }

        // Set the max
        let max = nums[mid] + leftMax + rightMax;

        // Find the best sub array from the left and right side.
        let leftHalf = findSubArray(left, mid - 1);
        let rightHalf = findSubArray(mid + 1, right);

        // Find the max
        return Math.max(max, Math.max(leftHalf, rightHalf));
    }

    return findSubArray(0, nums.length - 1);
};