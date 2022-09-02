// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:
// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

/**
 * @param {number[]} height
 * @return {number}
 * Time Complexity: O(n), we iterate through height once
 * Space Complexity: O(1), constant space
 */
var trap = function (height) {
    let left = 0, right = height.length - 1, res = 0;
    let leftMax = height[left];
    let rightMax = height[right];
    // two pointers
    while (left < right) {
        // if left is smaller
        if (leftMax < rightMax) {
            left++;
            // if current height is smaller than left max
            if (height[left] < leftMax)
                res += leftMax - height[left];
            // else update left max
            else {
                leftMax = height[left];
            }
        }
        else {
            right--;
            // if current height is smaller than right max
            if (height[right] < rightMax) {
                res += rightMax - height[right];
            }
            // else update right max
            else {
                rightMax = height[right];
            }
        }
    }
    return res;
};