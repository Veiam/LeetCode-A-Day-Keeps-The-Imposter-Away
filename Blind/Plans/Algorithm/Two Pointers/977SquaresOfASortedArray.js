// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

/**
 * Two pointer solution
 * @param {number[]} nums
 * @return {number[]}
 */
 const sortedSquares = function(nums) {
    const len = nums.length;
    let sorted = new Array(len), p1 = 0, p2 = len - 1;
    for(let i = p2; i >= 0; i --){
        let bigger;
        // We want to get the larger number
        if(Math.abs(nums[p1]) < Math.abs(nums[p2])){
            bigger = nums[p2];
            p2--;
        }
        else{
            bigger = nums[p1];
            p1++;
        }
        // set unfilled most right index
        sorted[i] = bigger ** 2;
    }
    return sorted;
};

/**
 * Similar solution to above but using a non fixed length array
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
    let start = 0, end = nums.length - 1;

    const res = [];
    while (res.length !== nums.length) {
        // compare absolute value
        if (Math.abs(nums[start]) >= Math.abs(nums[end])) {
            // unshift the bigger number to new array
            res.unshift(nums[start] * nums[start]);
            start++;
        }
        else {
            res.unshift(nums[end] * nums[end]);
            end--;
        }
    }
    return res;
};


/**
 * One liner using a sort method
 * @param {number[]} nums
 * @return {number[]}
 * Time Complexity: O(NlogN) where N is the length of nums.
 * Spaec Complexity: O(logN) where N is the length of nums.
 */
 const sortedSquares = function(nums) {
    return nums.map(x => x ** 2).sort((a,b) => a-b);
};