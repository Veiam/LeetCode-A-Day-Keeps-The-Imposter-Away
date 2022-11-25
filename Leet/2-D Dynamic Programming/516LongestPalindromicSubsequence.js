// Given a string s, find the longest palindromic subsequence's length in s.
// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
// Input: s = "bbbab"
// Output: 4
// Explanation: One possible longest palindromic subsequence is "bbbb".

// Example 2:
// Input: s = "cbbd"
// Output: 2
// Explanation: One possible longest palindromic subsequence is "bb".

// Constraints:
// 1 <= s.length <= 1000
// s consists only of lowercase English letters.
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    const dp = new Array(s.length).fill().map(() => new Array(s.length));
    for (let start = s.length - 1; start >= 0; start--) {
        for (let end = 0; end < s.length; end++) {
            if (start > end) {
                dp[start][end] = 0;
            }
            else if (start == end) {
                dp[start][end] = 1;
            }
            else if (s[start] == s[end]) {
                dp[start][end] = 2 + dp[start + 1][end - 1];
            }
            else {
                dp[start][end] = Math.max(dp[start + 1][end], dp[start][end - 1]);
            }
        }
    }


    return dp[0][s.length - 1];
};
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    let res = 1;
    const memo = new Array(s.length).fill().map(() => new Array(s.length));
    function dfs(start, end) {
        if (start >= 0 && end < s.length) {
            if (memo[start][end] == null) {
                if (start > end) {
                    return 0;
                }
                else if (start === end) {
                    return 1;
                }
                if (s[start] == s[end]) {
                    memo[start][end] = 2 + dfs(start + 1, end - 1);
                }
                else {
                    memo[start][end] = Math.max(dfs(start + 1, end), dfs(start, end - 1));
                }
            }
            return memo[start][end];
        }
        return 0;
    }

    return dfs(0, s.length - 1);
};