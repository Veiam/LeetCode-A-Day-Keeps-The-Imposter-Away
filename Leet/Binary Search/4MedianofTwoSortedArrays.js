// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Time complexity: O(log(min(m+n)))
 * Space complexity: O(n)
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // get total length and mid point
    const total = nums1.length + nums2.length;
    const half = total >> 1;

    // set it so num1 is always smaller
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let left = 0, right = nums1.length - 1;

    // loop until we find answer
    while (true) {
        // get the mid point of num1
        const mid1 = (left + right) >> 1;
        // set the remaining numbers to mid point of num2
        const mid2 = half - mid1 - 2;

        // get a left portion and edge number
        const leftOne = mid1 < 0 ? -Infinity : nums1[mid1];
        const leftTwo = mid2 < 0 ? -Infinity : nums2[mid2];
        const rightOne = mid1 + 1 >= nums1.length ? Infinity : nums1[mid1 + 1];
        const rightTwo = mid2 + 1 >= nums2.length ? Infinity : nums2[mid2 + 1];

        // if we found a correct left portion
        if (leftOne <= rightTwo && leftTwo <= rightOne) {
            return (total % 2) ? Math.min(rightOne, rightTwo) : (Math.max(leftOne, leftTwo) + Math.min(rightOne, rightTwo)) / 2;
        }
        // if num1 mid is larger than num2 mid + 1 then we need to take less from the num1
        else if (leftOne > rightTwo) {
            right = mid1 - 1;
        } else {
            left = mid1 + 1;
        }
    }
};