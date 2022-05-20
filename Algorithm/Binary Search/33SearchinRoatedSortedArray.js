// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).toExponentialFor example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:
// Input: nums = [1], target = 0
// Output: -1

// Constraints:
// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Time Complexity: O(logn), binary search
 * Space Complexity: O(1), constant space is used.
 */
const search = function(nums, target) {
    let begin = 0, end = nums.length - 1;

    while(begin <= end){
        const mid = Math.floor((begin+end)/2);
        const num = nums[mid], first = nums[begin], last = nums[end];
        // target has been found
        if(num === target)
            return mid;
        // if current pivot is not in rotated index
        else if(num >= first){
            // target is larger than current start but less than num
            if(target >= first && target < num)
                end = mid - 1;
            else
                begin = mid + 1;
        }
        // current pivot is in rotated index
        else{
            // target is less thna current end but larger than num
            if(target <= last && target > num)
                begin = mid +1;
            else
                end = mid - 1;
        }
    }
    // target does not exist
    return -1;
};