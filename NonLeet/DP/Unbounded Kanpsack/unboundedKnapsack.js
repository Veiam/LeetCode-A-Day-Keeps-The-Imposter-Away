// Given two integer arrays to represent weights and profits of ‘N’ items,
// we need to find a subset of these items which will give us maximum profit
// such that their cumulative weight is not more than a given number ‘C’.
// We can assume an infinite supply of item quantities; therefore,
// each item can be selected multiple times.

// try all combinations of the given items to choose the one with maximum profit and a weight that doesn’t exceed ‘C’
let solveKnapsack = function (profits, weights, capacity) {
    function knapsackRecursive(profits, weights, capacity, currentIndex) {
        if (capacity <= 0 || profits.length == 0 ||
            weights.length == 0 || currentIndex > profits.length)
            return 0;

        let profit1 = 0, profit2 = 0;
        //   create a new set which includes one quantity of item 'i' if it does not exceed the capacity, and 
        //      recursively call to process all items 
        if (weights[currentIndex] <= capacity) {
            profit1 = profits[currentIndex]
                + knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex)
        }
        //   create a new set without item 'i', and recursively process the remaining items 
        profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);
        // return the set from the above two sets with higher profit 
        return Math.max(profit1, profit2);
    }
    return knapsackRecursive(profits, weights, capacity, 0)
};

constprofits = [15, 50, 60, 90];
constweights = [1, 3, 4, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 8)}`);

// top down with memoization
let solveKnapsack = function (profits, weights, capacity) {
    const memoize = [];
    function knapsackRecursive(profits, weights, capacity, currentIndex) {
        // base checks and exit condition
        if (
            capacity <= 0 ||
            profits.length == 0 ||
            weights.length != profits.length ||
            currentIndex >= profits.length
        ) {
            return 0;
        }

        // set currentIndex to emptoy it if it's not intialized
        memoize[currentIndex] = memoize[currentIndex] || [];

        // check if it's memoized
        if (typeof memoize[currentIndex][capacity] !== 'undefined')
            return memoize[currentIndex][capacity];

        let profit1 = 0;
        if (weights[currentIndex] <= capacity) {
            // as long as we can fit the current element, keep recursive
            profit1 =
                profits[currentIndex] +
                knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex);
        }

        // recursive call after excluding the element at the currentIndex
        const profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);

        // memoize the better one
        memoize[currentIndex][capacity] = Math.max(profit1, profit2);
        // return memoize
        return memoize[currentIndex][capacity];
    }

    return knapsackRecursive(profits, weights, capacity, 0);
};

// bottom up, Find the maximum profit for every sub-array and for every possible capacity

let solveKnapsack = function (profits, weights, capacity) {
    // const 2d array with length of items and capacity
    const dp = Array(weights.length).fill(0).map(() => Array(capacity + 1).fill(0));
    // populate the capacity=0 columns
    for (let j = 1; j <= capacity; j++) {
        if (weights[0] <= j) {
            dp[0][j] = profits[0] + dp[0][j - 1];
        }
    }
    // process all sub-arrays for all capacities
    for (let i = 1; i < weights.length; i++) {
        for (let j = 1; j <= capacity; j++) {
            if (weights[i] > j)
                // if you can't fit it then keep the basket
                dp[i][j] = dp[i - 1][j];
            else if (weights[i] <= j)
                // if you can then see if it's worth keeping
                dp[i][j] = Math.max(dp[i - 1][j], profits[i] + dp[i][j - weights[i]]);
        }
    }
    // maximum profit will be in the bottom-right corner.
    return dp[weights.length - 1][capacity];
}

// how to find which item was used
// 1. check if the last cell comes from the upper row
// 1.5 if it did then remember the current row index and then go to step 1
// 2. if not then remove a current row index value 
// 3. remember the current index, then go to step 1
// repeat 1-3 until we are at 0.