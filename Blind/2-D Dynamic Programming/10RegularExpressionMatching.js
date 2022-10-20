// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Example 1:
// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".

// Example 2:
// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

// Example 3:
// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

// Constraints:
// 1 <= s.length <= 20
// 1 <= p.length <= 30
// s contains only lowercase English letters.
// p contains only lowercase English letters, '.', and '*'.
// It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * Time: O(s*p)
 */
var isMatch = function (s, p) {
    const memo = new Array(s.length + 1).fill().map(() => new Array(p.length + 1));
    function dfs(x, y) {
        // if it's over 
        if (x > s.length || y > p.length) {
            return false;
        }

        if (y == p.length) {
            memo[x][y] = x == s.length;
        }
        else if (memo[x][y] == null) {
            const sChar = s[x];
            const pChar = p[y];
            // see if they match or pattern is wild card
            const match = pChar === "." || sChar === pChar;
            // check if next char is repeating
            if (p[y + 1] === "*") {
                // case 1, if curret char is matchig then check if next char is also matching
                // case 2, check if pattern after repeating matches
                memo[x][y] = match && dfs(x + 1, y) || dfs(x, y + 2);
            }
            else {
                // move both pattern and char
                memo[x][y] = match && dfs(x + 1, y + 1);
            }

        }
        return memo[x][y];
    }

    return dfs(0, 0);
};
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * Time: O(s*p)
 */
var isMatch = function (s, p) {
    const dp = new Array(s.length + 1).fill().map(() => new Array(p.length + 1).fill());
    dp[s.length][p.length] = true;

    // we loop from s.length to 0 because we need to check if we can match empty string
    for (let i = s.length; i >= 0; i--) {
        for (let j = p.length - 1; j >= 0; j--) {
            const match = p[j] === "." || s[i] === p[j];
            if (p[j + 1] === "*") {
                // case 1, if curret char is matchig then check if next char is also matching
                // case 2, check if pattern after repeating matches
                dp[i][j] = match && dp[i + 1]?.[j] || dp[i][j + 2];
            }
            else {
                // move both pattern and char
                dp[i][j] = match && dp[i + 1]?.[j + 1];
            }
        }
    }
    return dp[0][0] || false;
};