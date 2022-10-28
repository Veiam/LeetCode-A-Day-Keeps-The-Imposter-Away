// Write a function that reverses a string. The input string is given as an array of characters s.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 
 * Time complexity : O(N) to swap N/2 element.
 * Space complexity : O(1), it's a constant space solution.
 */
const reverseString = function (s) {
    let start = 0, end = s.length - 1;
    // until we reach the middle
    while (start < end) {
        // swap start and end indexes
        [s[start], s[end]] = [s[end], s[start]];
        start++;
        end--;
    }
};