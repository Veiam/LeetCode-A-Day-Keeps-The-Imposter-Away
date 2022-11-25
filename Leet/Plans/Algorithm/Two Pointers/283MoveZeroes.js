// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * Time Complexity: O(n). The input array is traversed at most once. Thus the time complexity is O(n).
 * Space Complexity : O(1). Only constant space is used.
 */
const moveZeroes = function (nums) {
    for (let index = 0, lastNonZero = 0; index < nums.length; index++) {
        // keep track of last non zero index
        // then swap current index if it's non zero and increase last non zero index
        if (nums[index] !== 0) {
            [nums[lastNonZero], nums[index]] = [nums[index], nums[lastNonZero]];
            lastNonZero++;
        }
    }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Time Complexity: O(n). We write to each index once
 * Space Complexity: O(1). Constant space is used
 */
 const moveZeroes = function(nums) {
    let lastNonZeroIndex = 0;
   // If the current element is not 0, then we need to
    // append it just in front of last non 0 element we found. 
    for(let i =0; i < nums.length; i++){
        if(nums[i] !== 0 ){
            nums[lastNonZeroIndex] = nums[i];
            lastNonZeroIndex++;
        }
    }
    
     	// After we have finished processing new elements,
 	// all the non-zero elements are already at beginning of array.
 	// We just need to fill remaining array with 0's.
    for(let i = lastNonZeroIndex; i < nums.length; i++){
        nums[i] = 0;
    }
};