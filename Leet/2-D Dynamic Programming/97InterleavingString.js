// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
// An interleaving of two strings s and t is a configuration where s and t are divided into n and m non-empty substrings respectively, such that:
// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.

// Example 1:
// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true
// Explanation: One way to obtain s3 is:
// Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
// Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
// Since s3 can be obtained by interleaving s1 and s2, we return true.

// Example 2:
// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// Output: false
// Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.

// Example 3:
// Input: s1 = "", s2 = "", s3 = ""
// Output: true

// Constraints:
// 0 <= s1.length, s2.length <= 100
// 0 <= s3.length <= 200
// s1, s2, and s3 consist of lowercase English letters.

// Follow up: Could you solve it using only O(s2.length) additional memory space?
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 * Top down
 * Time and space: O(s1 * s2)
 */
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
    // build a memo map
    const dp = new Array(s1.length + 1).fill().map(() => new Array(s2.length + 1).fill(null));
    // recursively find if i3 equals i1 or i2
    function helper(i1, i2, i3) {
        if (i1 >= s1.length && i2 >= s2.length && i3 >= s3.length) {
            return true;
        }
        if (dp[i1][i2] == null) {
            let r1 = false, r2 = false;
            if (s1[i1] === s3[i3]) {
                r1 = helper(i1 + 1, i2, i3 + 1);
            }
            if (s2[i2] === s3[i3]) {
                r2 = helper(i1, i2 + 1, i3 + 1);
            }
            dp[i1][i2] = r1 || r2;
        }

        return dp[i1][i2];
    }

    return helper(0, 0, 0);
};

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 * Time: O(s1 * s2)
 * Space: O(s2)
 */
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }

    // base case
    const dp = new Array(s2.length + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {
            // get all chars
            const c1 = s1[i - 1];
            const c2 = s2[j - 1];
            const c3 = s3[i + j - 1];
            // current cell is true if s1 char === s3 char and prev s1 char also matched (current cell is true)
            // OR
            // current cell is true if s2 char === s3 char and prev s2 char also matched (previous cell is ture)
            dp[j] = (dp[j] && c1 === c3) || (dp[j - 1] && c2 === c3);
        }
    }

    return dp[s2.length] || false;
};