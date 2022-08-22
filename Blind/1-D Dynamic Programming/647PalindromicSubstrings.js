// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

// Example 1:
// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// Example 2:
// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// Constraints:
// 1 <= s.length <= 1000
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 * Time complexity: O(n^2), we check each letter and expand out
 * Space complexity: O(n), recursive stack
 */
var countSubstrings = function (s) {
    let counter = 0;

    function find(low, high) {
        // middle out
        while (low >= 0 && high < s.length && s[low] === s[high]) {
            counter++;
            low--;
            high++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        // odd case
        find(i, i);
        // even case
        find(i, i + 1);
    }

    return counter;
};