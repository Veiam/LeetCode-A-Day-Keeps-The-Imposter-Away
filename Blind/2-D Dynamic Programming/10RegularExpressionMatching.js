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
    const memo = new Array(s.length).fill().map(() => new Array(p.length));
    function dfs(x, y) {
        // if either reached oob
        if (x < 0 || y < 0) {
            // if there are still pattern left
            while (y >= 0) {
                // only valid pattern left should be [a-z]* repeating
                if (p[y] !== "*") {
                    return false;
                }
                y -= 2;
            }
            return x < 0;
        }

        if (memo[x][y] == null) {
            const sChar = s[x];
            const pChar = p[y];
            // if chars match or pattern is wild card
            if (pChar === "." || sChar === pChar) {
                memo[x][y] = dfs(x - 1, y - 1);
            }
            // repeating pattern
            else if (pChar === "*") {
                // check previous char
                const prev = p[y - 1];
                // if they match or if it's wild
                if (prev === "." || sChar === prev) {
                    // we have two choices of keep using the pattern
                    // or stop using current pattern and moving on to next
                    memo[x][y] = dfs(x - 1, y) || dfs(x - 1, y - 2);
                }
                // if they don't match, check if it matches by not using pattern
                memo[x][y] ||= dfs(x, y - 2);
            }
            else {
                memo[x][y] = false;
            }
        }
        return memo[x][y];
    }

    // start from backword so we catch repeating pattern
    return dfs(s.length - 1, p.length - 1);
};