// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

// Constraints:
// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

/**
 * Top down
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * Time complexity: O(n * m), where n is amount and m is number of coins
 * Space complexity: O(n)
 */
var coinChange = function (coins, amount) {
    if (amount === 0) {
        return 0;
    }

    function findChange(remaining, count) {
        // if we are over
        if (remaining < 0) {
            return -1;
        }

        // if we have an exact change
        if (remaining === 0) {
            return 0;
        }

        // if we already calculated it
        if (count[remaining - 1] && count[remaining - 1] !== 0) {
            return count[remaining - 1];
        }

        let min = amount + 1;
        // go through coins
        for (let coin of coins) {
            const res = findChange(remaining - coin, count);
            // if we found a new min, update it
            if (res >= 0 && res < min) {
                min = 1 + res;
            }
        }
        // update the memoization
        count[remaining - 1] = (min === (amount + 1)) ? -1 : min;
        return count[remaining - 1];
    }


    return findChange(amount, []);
};

/**
 * Bottom up
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1);
    // need 0 coin to get 0 total
    dp[0] = 0;

    // loop through
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            // if we can reduce the remaining amount
            if (i - coin >= 0) {
                // find a minimum
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }

    return dp[amount] === amount + 1 ? -1 : dp[amount];
};