/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    const lastDay = days[days.length - 1];
    const dp = new Array(lastDay + 1).fill(0);
    const set = new Set(days);
    for (let i = 1; i < dp.length; i++) {
        if (set.has(i)) {
            dp[i] = Math.min((dp[i - 1] || 0) + costs[0], (dp[i - 7] || 0) + costs[1], (dp[i - 30] || 0) + costs[2]);
        }
        else {
            dp[i] = dp[i - 1];
        }
    }
    return dp[lastDay];
};