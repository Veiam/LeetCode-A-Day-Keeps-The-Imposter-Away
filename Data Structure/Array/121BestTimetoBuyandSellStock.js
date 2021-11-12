// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day
// in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

/**
 * @param {number[]} prices
 * @return {number}
 * Time Complexity: O(n), where n is number of index in prices.
 * Space Complexity: O(1), constant space is used.
 */
const maxProfit = function (prices) {
    // store min/max
    let min = prices[0], max = 0;

    for (let i = 1; i < prices.length; i++) {
        // if we found a new low, then update the min
        if (prices[i] < min) {
            min = prices[i];
        }
        // if there isn't new low, see if it's a new max
        else if (prices[i] - min > max) {
            max = prices[i] - min;
        }
    }
    // return max or 0 depend on whether or not we found a profit
    return max >= 0 ? max : 0;
};