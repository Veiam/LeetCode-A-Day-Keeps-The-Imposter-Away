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
 * Time Complexity: O(n), We iterate N - 1 times, and at each iteration we apply an equation that requires O(1) time.
 * Space Complexity: O(n), minimum cost for each step needs to be stored
 */
const minCostClimbingStairs = function (cost) {
    // initialize cost to reach first two steps
    // it's 0 since we can either start at first or second step
    const minimumCosts = [0, 0];
    // iterate through and calculate the min cost to reach that step
    for (let i = 2; i <= cost.length; i++) {
        const oneStep = minimumCosts[i - 1] + cost[i - 1];
        const twoSteps = minimumCosts[i - 2] + cost[i - 2];
        minimumCosts[i] = Math.min(oneStep, twoSteps);
    }
    return minimumCosts[cost.length];
};

/**
 * @param {number[]} cost
 * @return {number}
 * Time Complexity: O(n), minimumCost gets called with each index from 0 to N. Because of our memoization, each call will only take O(1) time.
 * Space Complexity: O(n), minimum cost for each step needs to be stored
 */
const minCostClimbingStairs = function (cost) {
    const memo = [cost.length];

    function minimumCost(pos) {
        // since we can start at either 1st or 2nd step,
        // it costs 0 to get there
        if (pos <= 1) {
            return 0;
        }
        if (!memo[pos]) {
            const oneStep = cost[pos - 1] + minimumCost(pos - 1);
            const twoStep = cost[pos - 2] + minimumCost(pos - 2);
            memo[pos] = Math.min(oneStep, twoStep);
        }
        return memo[pos];

    }

    // we start from the top
    return minimumCost(cost.length);

};

/**
 * @param {number[]} cost
 * @return {number}
 * Time Complexity: We iterate N-1 times.
 * Spaec Complexity: constance space is used
 */
const minCostClimbingStairs = function (cost) {
    const mins = [0, 0];

    for (let i = 2; i <= cost.length; i++) {
        const oneStep = mins[(i - 1) % 2] + cost[i - 1];
        const twoSteps = mins[i % 2] + cost[i - 2];
        mins[i % 2] = Math.min(oneStep, twoSteps);
    }

    return mins[cost.length % 2];

};