// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(n), we go through each number at least once, thn we reiterate through each sequence once
 * Space Complexity: O(n), space to stor a new set
 */
var longestConsecutive = function (nums) {
    // build a set from nums
    const set = new Set(nums);
    let res = 0;

    // loop through set
    set.forEach(num => {
        // if num is a sequence starter, meaning there isn't a num-1
        if (!(set.has(num - 1))) {
            // calculate the streak
            let next = num + 1;
            let streak = 1;
            while (set.has(next)) {
                next++;
                streak++;
            }
            res = Math.max(res, streak);
        }
    })

    return res;
};