// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

// Example 1:
// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.

// Example 2:
// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.

// Example 3:
// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

// Constraints:
// 1 <= text1.length, text2.length <= 1000
// text1 and text2 consist of only lowercase English characters.

/**
 * DP with space optimization
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * Time Complexity: O(n * m)
 * Spaec Complexity: O(min(n,m))
 */
var longestCommonSubsequence = function (text1, text2) {
    // we make sure text 2 is always smaller than text 1
    if (text1.length < text2.length) {
        [text1, text2] = [text2, text1];
    }
    const len1 = text1.length;
    const len2 = text2.length;
    // we only need two rows
    const dp = new Array(2).fill(0).map(() => new Array(len2 + 1).fill(0));

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            // if the char matches, we add previous best one from diagonal+ 1
            if (text1[i - 1] == text2[j - 1]) {
                dp[i % 2][j] = dp[(i - 1) % 2][j - 1] + 1;
            }
            else {
                // if not find a max from left and up
                dp[i % 2][j] = Math.max(dp[i % 2][j - 1], dp[(i - 1) % 2][j]);
            }
        }
    }

    return dp[(len1) % 2][len2];
};