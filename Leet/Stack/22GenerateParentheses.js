// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

// Constraints:
// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 * Time complexity: (4^n / sqrt(n))
 * Space complexity: (4^n / sqrt(n))
 */
var generateParenthesis = function (n) {
    let res = [];
    let comb = [];
    // keep track of how many time we used open and close
    function backtrack(open, close) {
        if (open + close === n * 2) {
            res.push(comb.join(""));
            return;
        }

        // we can always add open
        if (open < n) {
            comb.push("(");
            backtrack(open + 1, close);
            comb.pop();
        }

        // we can add close only if there are more open
        if (open > close && close < n) {
            comb.push(")");
            backtrack(open, close + 1);
            comb.pop();
        }
    }
    backtrack(0, 0);
    return res;

};

/**
 * @param {number} n
 * @return {string[]}
 * Time complexity: (4^n / sqrt(n))
 * Space complexity: (4^n / sqrt(n))
 */
var generateParenthesis = function (n) {
    let res = [];
    // same concept as above
    function dfs(comb, open, close) {
        if (close < open || close < 0 || open < 0) {
            return;
        }
        if (open === 0 && close === 0) {
            res.push(comb);
            return;
        }

        dfs(comb + "(", open - 1, close);
        dfs(comb + ")", open, close - 1);
    }
    dfs("(", n - 1, n);
    return res;
};