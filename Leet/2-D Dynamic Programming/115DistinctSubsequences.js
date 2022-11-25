// Given two strings s and t, return the number of distinct subsequences of s which equals t.
// A string's subsequence is a new string formed from the original string by deleting some (can be none) of the characters without disturbing the remaining characters' relative positions. (i.e., "ACE" is a subsequence of "ABCDE" while "AEC" is not).
// The test cases are generated so that the answer fits on a 32-bit signed integer.

// Example 1:
// Input: s = "rabbbit", t = "rabbit"
// Output: 3
// Explanation:
// As shown below, there are 3 ways you can generate "rabbit" from s.
// rabbbit
// rabbbit
// rabbbit

// Example 2:
// Input: s = "babgbag", t = "bag"
// Output: 5
// Explanation:
// As shown below, there are 5 ways you can generate "bag" from s.
// babgbag
// babgbag
// babgbag
// babgbag
// babgbag

// Constraints:
// 1 <= s.length, t.length <= 1000
// s and t consist of English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * Top down recursion with memoizatoin
 * Time and space: O(s*t)
 */
var numDistinct = function (s, t) {
    const sLen = s.length;
    const tLen = t.length;

    let dp = new Array(s.length).fill().map(() => new Array(t.length).fill(null));

    function dfs(x, y) {
        // if we reached the end for either
        if (x === sLen || y === tLen) {
            // if only we reached the end of t, we found one way
            if (y === tLen)
                return 1;
            return 0;
        }

        if (dp[x][y] == null) {
            let take = 0;
            // only if char matches, we move both indexes
            if (s[x] === t[y]) {
                take = dfs(x + 1, y + 1);
            }
            // calculate and save
            dp[x][y] += (take + dfs(x + 1, y));
        }
        return dp[x][y]
    }

    return dfs(0, 0);
};

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * Bottom up dp, space optimized
 * Time: O(s*t)
 * Space: O(t)
 */
var numDistinct = function (s, t) {
    const sLen = s.length;
    const tLen = t.length;

    // 1d array
    let dp = new Array(t.length).fill(0);

    // loop through
    for (let i = s.length - 1; i >= 0; i--) {
        // base case representing there is
        // nothing else to match in t so we found a way 
        let prev = 1;
        for (let j = t.length - 1; j >= 0; j--) {
            // save current cell
            let old = dp[j];

            // if chars match then we add prev to value
            if (s[i] === t[j]) {
                dp[j] += prev;
            }
            // replaced saved value
            prev = old;
        }
    }

    return dp[0];
};