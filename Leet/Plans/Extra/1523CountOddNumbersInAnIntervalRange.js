/*
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

Example 1:
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

Example 2:
Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].

Constraints:
0 <= low <= high <= 10^9
*/
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 * Time Complexity: O(1), constant math expression
 * Space Complexity: O(1), no extra space is used.
 */
const countOdds = function (low, high) {
    return Math.ceil(high / 2) - Math.floor(low / 2);
};