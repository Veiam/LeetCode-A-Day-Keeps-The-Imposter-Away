// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
// You have the following three operations permitted on a word:
// Insert a character
// Delete a character
// Replace a character

// Example 1:
// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Example 2:
// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

// Constraints:
// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * Top-down memo
 * Time and space: O(m * n)
 */
var minDistance = function (word1, word2) {
    // if either are 0, then we just need to add or delete all
    if (word1.length === 0 || word2.length === 0) {
        return word1.length + word2.length;
    }

    const memo = new Array(word1.length).fill().map(() => new Array(word2.length))
    function dfs(i, j) {
        // if we have nothing left in word1, then remaining word2 must be added
        if (word1.length === i) {
            return word2.length - j
        }
        // if we have nothing left in word2, then remaining word1 must be added
        else if (word2.length === j) {
            return word1.length - i;
        }

        // if they match, move on to tnext
        if (word1[i] === word2[j]) {
            return dfs(i + 1, j + 1);
        }

        if (memo[i][j] == null) {
            // calculate insertion case
            const ins = dfs(i, j + 1);
            // calculate deletion case
            const del = dfs(i + 1, j);
            // calculate replace case
            const rep = dfs(i + 1, j + 1);

            // they do not match, so we find a min of 3 methods and add 1
            memo[i][j] = Math.min(ins, del, rep) + 1;
        }
        return memo[i][j];

    }

    return dfs(0, 0);
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * Bottom-up
 * Time and space: O(mn)
 */
var minDistance = function (word1, word2) {
    // if either is empty, then we need to add or delete all
    if (word1.length === 0 || word2.length === 0) {
        return word1.length + word2.length;
    }

    let dp = new Array(word2.length + 1);

    // Base case
    for (let i = 0; i <= word2.length; i++) {
        dp[i] = word2.length - i;
    }

    for (let i = word1.length - 1; i >= 0; i--) {
        // bases
        let prev = dp[word2.length];
        dp[word2.length] = word1.length - i;
        for (let j = word2.length - 1; j >= 0; j--) {
            let cur = dp[j];
            // if they match then update current cell
            if (word1[i] === word2[j]) {
                dp[j] = prev;
            }
            else {
                // if they don't match then find a min + 1
                dp[j] = Math.min(prev, dp[j], dp[j + 1]) + 1;
            }
            prev = cur;
        }
    }

    return dp[0];
};