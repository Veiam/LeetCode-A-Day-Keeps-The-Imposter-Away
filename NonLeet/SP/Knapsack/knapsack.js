// Given the weights and profits of ‘N’ items, we are asked to put these items in a knapsack with a capacity ‘C.’
// The goal is to get the maximum profit out of the knapsack items.
// Each item can only be selected once, as we don’t have multiple quantities of any item.

let solveKnapsack = function (profits, weights, capacity) {
    const memoize = [];

    function solveKnapsackRecursive(profits, weights, capacity, index) {
        if (capacity <= 0 || index == profits.length) {
            return 0;
        }
        memoize[index] = memoize[index] || [];


        if (typeof memoize[index][capacity] == 'undefined') {
            let sum1 = 0;
            // recursive call after choosing the element at the currentIndex
            // if the weight of the element at currentIndex exceeds the capacity, we shouldn't process this
            if (weights[index] <= capacity) {
                sum1 = profits[index] + solveKnapsackRecursive(profits, weights, capacity - weights[index], index + 1);
            }
            // recursive call after excluding the element at the currentIndex
            const sum2 = solveKnapsackRecursive(profits, weights, capacity, index + 1);
            memoize[index][capacity] = Math.max(sum1, sum2);
        }
        return memoize[index][capacity];
    }
    return solveKnapsackRecursive(profits, weights, capacity, 0);
};

const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];

console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);

let solveKnapsack = function (profits, weights, capacity) {
    const n = weights.length;
    if (capacity <= 0 || n == 0 || profits.length != n)
        return 0;

    const dp = Array(n).fill(0).map(() => Array(capacity + 1).fill(0));

    // if we have only one weight, we will take it if it is not more than the capacity
    for (let c = 0; c <= capacity; c++) {
        if (weights[0] <= c)
            dp[0][c] = profits[0];
    }

    // process all sub-arrays for all the capacities
    for (let i = 1; i < n; i++) {
        for (let c = 1; c <= capacity; c++) {
            let profit1 = 0,
                profit2 = 0;
            // include the item, if it is not more than the capacity
            if (weights[i] <= c)
                profit1 = profits[i] + dp[i - 1][c - weights[i]];
            // exclude the item
            profit2 = dp[i - 1][c];
            // take maximum
            dp[i][c] = Math.max(profit1, profit2);
        }
    }

    let selectedWeights = '';
    let totalProfit = dp[weights.length - 1][capacity];
    let remainingCapacity = capacity;
    for (let i = weights.length - 1; i > 0; i--) {
        if (totalProfit != dp[i - 1][remainingCapacity]) {
            selectedWeights = `${weights[i]} ${selectedWeights}`;
            remainingCapacity -= weights[i];
            totalProfit -= profits[i];
        }
    }

    if (totalProfit != 0) selectedWeights = `${weights[0]} ${selectedWeights}`;

    console.log(`Selected weights: ${selectedWeights}`);

    // maximum profit will be at the bottom-right corner.
    return dp[n - 1][capacity];
};

let solveKnapsack = function (profits, weights, capacity) {
    const n = profits.length;
    if (capacity <= 0 || n == 0 || weights.length != n) return 0;

    // we only need one previous row to find the optimal solution, overall we need '2' rows
    // the above solution is similar to the previous solution, the only difference is that 
    // we use `i%2` instead if `i` and `(i-1)%2` instead if `i-1`
    const dp = Array(2)
        .fill(0)
        .map(() => Array(capacity + 1).fill(0));

    // if we have only one weight, we will take it if it is not more than the capacity
    for (let c = 0; c <= capacity; c++) {
        if (weights[0] <= c) dp[0][c] = dp[1][c] = profits[0];
    }

    // process all sub-arrays for all the capacities
    for (let i = 1; i < n; i++) {
        for (let c = 1; c <= capacity; c++) {
            let profit1 = 0,
                profit2 = 0;
            // include the item, if it is not more than the capacity
            if (weights[i] <= c) profit1 = profits[i] + dp[(i - 1) % 2][c - weights[i]];
            // exclude the item
            profit2 = dp[(i - 1) % 2][c];
            // take maximum
            dp[i % 2][c] = Math.max(profit1, profit2);
        }
    }

    // maximum profit will be at the bottom-right corner.
    return dp[(n - 1) % 2][capacity];
};

let solveKnapsack = function (profits, weights, capacity) {
    const n = weights.length;
    if (capacity <= 0 || n == 0 || profits.length != n)
        return 0;

    const dp = Array(capacity + 1).fill(0);

    // process all sub-arrays for all the capacities
    for (let i = 1; i < n; i++) {
        for (let c = capacity; c >= 0; c--) {
            let profit1 = 0,
                profit2 = 0;
            // include the item, if it is not more than the capacity
            if (weights[i] <= c)
                profit1 = profits[i] + dp[c - weights[i]];
            // exclude the item
            profit2 = dp[c];
            // take maximum
            dp[c] = Math.max(profit1, profit2);
        }
    }
    // maximum profit will be at the bottom-right corner.
    return dp[capacity];
};