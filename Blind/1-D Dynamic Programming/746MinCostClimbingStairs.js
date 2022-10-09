// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.

// Example 1:
// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

// Example 2:
// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.

// Constraints:
// 2 <= cost.length <= 1000
// 0 <= cost[i] <= 999

/**
 * @param {number[]} cost
 * @return {number}
 * Time and space: O(n)
 */
var minCostClimbingStairs = function (cost) {
    const memo = [];

    // memoization
    function climb(index) {
        // base case
        if (index <= 1) {
            return 0;
        }

        // recursive
        if (!memo[index]) {
            const oneStep = cost[index - 1] + climb(index - 1);
            const twoStep = cost[index - 2] + climb(index - 2);

            memo[index] = Math.min(oneStep, twoStep);
        }
        return memo[index]
    }

    return climb(cost.length);
};

/**
 * @param {number[]} cost
 * @return {number}
 * Time: O(n)
 * Space: O(1)
 */
var minCostClimbingStairs = function (cost) {
    let length = cost.length;
    // bottom up constant space
    for (let i = 2; i < length; i++) {
        cost[i] += Math.min(cost[i - 2], cost[i - 1]);
    }
    return Math.min(cost[length - 2], cost[length - 1]);
};