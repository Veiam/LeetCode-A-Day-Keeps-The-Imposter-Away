// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
// A palindrome string is a string that reads the same backward as forward.

// Example 1:
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

// Example 2:
// Input: s = "a"
// Output: [["a"]]

// Constraints:
// 1 <= s.length <= 16
// s contains only lowercase English letters.

/**
 * @param {string} s
 * @return {string[][]}
 * Time: O(n * 2^n), for every letter we can either take it as is or try to increase length
 * Space: O(n), recursive stack
 */
var partition = function (s) {
    const result = [];
    const results = [];

    function backtrack(start) {
        if (start >= s.length) {
            results.push(result.slice());
            return;
        }
        for (let end = start; end < s.length; end++) {
            // if current range is palindrome then add to result
            if (isPalindrome(start, end)) {
                result.push(s.slice(start, end + 1));
                // backtrack
                backtrack(end + 1);
                result.pop();
            }
        }
    }

    function isPalindrome(low, high) {
        while (low < high) {
            if (s[low++] !== s[high--]) {
                return false;
            }
        }
        return true;
    }

    backtrack(0);

    return results;
};

/**
 * @param {string} s
 * @return {string[][]}
 * Time: O(n * 2^n), for every letter we can either take it as is or try to increase length
 * Space: O(n * n), 2d array for storing dp results
 */
var partition = function (s) {
    const result = [];
    const dp = new Array(s.length).fill(false).map(() => new Array(s.length).fill(false));
    const results = [];

    function backtrack(start) {
        // if we are at the end, push the result to results
        if (start >= s.length) {
            results.push(result.slice());
            return;
        }
        // loop through
        for (let end = start; end < s.length; end++) {
            // if start and end matches and its extension also matches in dp, then current range must be palindrome as well
            if (s[start] === s[end] && (end - start <= 2 || dp[start + 1][end - 1])) {
                dp[start][end] = true;
                result.push(s.slice(start, end + 1));
                // backtrack
                backtrack(end + 1);
                result.pop();
            }
        }
    }

    backtrack(0);

    return results;
};