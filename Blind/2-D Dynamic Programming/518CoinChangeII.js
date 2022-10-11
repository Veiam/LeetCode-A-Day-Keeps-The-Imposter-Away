// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
// You may assume that you have an infinite number of each kind of coin.
// The answer is guaranteed to fit into a signed 32-bit integer.

// Example 1:
// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

// Example 2:
// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.

// Example 3:
// Input: amount = 10, coins = [10]
// Output: 1

// Constraints:
// 1 <= coins.length <= 300
// 1 <= coins[i] <= 5000
// All the values of coins are unique.
// 0 <= amount <= 5000
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 * Bottom up, optimized
 * Time: O(m * n), where m is length of amount and n is length of coin
 * space: O(m)
 */
var change = function (amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    // loop through coins
    for (let coin of coins) {
        // loop through coin to amount
        for (let j = coin; j <= amount; j++) {
            // compute the combinations
            dp[j] += dp[j - coin];
        }
    }

    return dp[amount];
};

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 * top-down memo
 * Time and space: O(m * n)
 */
var change = function (amount, coins) {
    const dp = new Array(coins.length + 1).fill().map(() => new Array(amount + 1).fill(null));

    function helper(total, index) {
        // if there is nothing remaining then we found a way
        if (total === 0) {
            return 1;
        }
        // if we are over, then we did not find a way
        if (index < 0 || total < 0) {
            return 0;
        }
        // if it's not memoized
        if (dp[index][total] == null) {
            const coin = coins[index];
            // we can either subtract current coin or move on to the next one
            dp[index][total] = helper(total - coin, index) + helper(total, index - 1);
        }
        return dp[index][total];
    }

    return helper(amount, coins.length - 1);
};