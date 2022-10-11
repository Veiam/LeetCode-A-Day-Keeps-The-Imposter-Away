// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:
// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

// Example 1:
// Input: prices = [1,2,3,0,2]
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]

// Example 2:
// Input: prices = [1]
// Output: 0

// Constraints:
// 1 <= prices.length <= 5000
// 0 <= prices[i] <= 1000

/**
 * @param {number[]} prices
 * @return {number}
 * Bottom-up dynamic programming
 * Time: O(n ^ 2), where n is length of prices
 * Space: O(n), keep track of max array
 */
var maxProfit = function (prices) {
    // if we can't sell
    if (prices.length === 1) {
        return 0;
    }

    const dp = new Array(prices.length);
    // loop backward
    for (let i = prices.length - 1; i >= 0; i--) {
        let sell = 0;
        // try to find max sell
        for (let j = i + 1; j < prices.length; j++) {
            // max sell is either prev stored max sell or
            // profit + max after cool down
            sell = Math.max(sell, prices[j] - prices[i] + (dp[j + 2] || 0));
        }
        // find possible max if we don't sell
        let keep = dp[i + 1] || 0;

        dp[i] = Math.max(sell, keep);

    }
    return dp[0];
};

/**
 * @param {number[]} prices
 * @return {number}
 * Time: O(n), we loop through price once
 * Space: O(1), constant space
 */
var maxProfit = function (prices) {
    let sell = -Infinity, hold = -Infinity, reset = 0;
    // at each prices, we try to find max of each states.
    for (let price of prices) {
        let prevSell = sell;
        // if we want to sell
        // then we add currnet price to prev hold 
        sell = hold + price;
        // if we wants to hold
        // then prev needs to be hold or reset
        // if it was reset, we can get a new stock
        hold = Math.max(hold, reset - price);
        // if we wants to reset
        // then prev needs to be sell or reset
        reset = Math.max(prevSell, reset);
    }
    return Math.max(sell, reset);
};