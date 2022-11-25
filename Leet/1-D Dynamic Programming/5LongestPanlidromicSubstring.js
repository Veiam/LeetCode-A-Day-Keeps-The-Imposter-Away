// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 * Time Complexity: O(n^2), we check each letter and try to expand
 * Space Complexity: O(1), constant space is used
 */
var longestPalindrome = function (s) {
    let res = "";
    let len = s.length;

    function checkPalindrome(left, right) {
        // if left and right are valid and their char is same
        while (left >= 0 && right < len && s[left] === s[right]) {
            if (right - left + 1 > res.length) {
                res = s.substring(left, right + 1)
            }
            left--;
            right++;
        }

    }

    // loop through and expand from the middle
    for (let i = 0; i < len; i++) {
        // odd length
        checkPalindrome(i, i + 1);
        // even length
        checkPalindrome(i, i);
    }

    return res;

};