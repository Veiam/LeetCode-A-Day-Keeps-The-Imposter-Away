// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Constraints:
// 1 <= nums.length <= 105
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Time complexity: O(n + m + m), where n is entries of nums and m is count of unique number
 * Space complexity: O(n + m + k), where n is entries of nums and m is count of unique number
 */
var topKFrequent = function (nums, k) {
    // Go through each num and get a count of each number occurence
    const count = {};
    for (let num of nums) {
        if (!(num in count)) {
            count[num] = 0;
        }
        count[num]++;
    }

    // bucket sort
    // freq array with nums.length + 1, frequency can be from 0 to nums.length
    let freq = new Array(nums.length + 1).fill([]);
    // loop through map saved above
    for (const [key, value] of Object.entries(count)) {
        // key is count and value is a list of num that belongs to that count
        // add the value to the existing frequency
        freq[value] = [...freq[value], key];
    }

    // Now loop from the top and fill in until we have k amount
    const res = [];
    for (let i = nums.length; i >= 0; i--) {
        if (freq[i]) {
            for (let num of freq[i]) {
                res.push(num);
            }
        }
        if (res.length === k) {
            return res;
        }
    }
    return res;
};