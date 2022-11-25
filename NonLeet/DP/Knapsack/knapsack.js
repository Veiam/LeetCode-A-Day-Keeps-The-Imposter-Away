// Given two integer arrays to represent weights and profits of ‘N’ items, 
// we need to find a subset of these items which will give us maximum profit such that 
// their cumulative weight is not more than a given number ‘C’. Write a function that 
// returns the maximum profit. Each item can only be selected once, 
// which means either we put an item in the knapsack or skip it.

let solveKnapsack = function (profits, weights, capacity) {
  let i = weights.length - 1, totalProfit = 0;
  while (i >= 0 && capacity != 0) {
    if (capacity >= weights[i]) {
      totalProfit += profits[i];
      capacity -= weights[i];
    }
    i--;
  }
  return totalProfit;
};

constprofits = [1, 6, 10, 16];
constweights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);

let solveKnapsackMemoization = function (profits, weights, capacity) {
  const dp = [];

  function knapsackRecursive(profits, weights, capacity, currentIndex) {
    // base checks
    if (capacity <= 0 || currentIndex >= profits.length) return 0;

    // if dp[currentIndex] does not exist then set it to empty
    dp[currentIndex] = dp[currentIndex] || [];

    if (typeof dp[currentIndex][capacity] !== 'undefined') {
      return dp[currentIndex][capacity];
    }

    // recursive call after choosing the element at the currentIndex
    // if the weight of the element at currentIndex exceeds the capacity, we shouldn't process this
    // create a new set which INCLUDES item 'i' if the total weight does not exceed the capacity, and 
    // recursively process the remaining capacity and items
    let profit1 = 0;
    if (weights[currentIndex] <= capacity) {
      profit1 = profits[currentIndex] + knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1);
    }

    // recursive call after excluding the element at the currentIndex
    // create a new set WITHOUT item 'i', and recursively process the remaining items 
    // return the set from the above two sets with higher profit 
    const profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);

    dp[currentIndex][capacity] = Math.max(profit1, profit2);
    return dp[currentIndex][capacity];
  }

  return knapsackRecursive(profits, weights, capacity, 0);
}

let solveKnapsack = function (profits, weights, capacity) {
  const n = profits.length;
  if (capacity <= 0 || n == 0 || weights.length != n) return 0;

  const dp = Array(profits.length)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));

  // populate the capacity=0 columns; with '0' capacity we have '0' profit
  for (let i = 0; i < n; i++) dp[i][0] = 0;

  // if we have only one weight, we will take it if it is not more than the capacity
  for (let c = 0; c <= capacity; c++) {
    if (weights[0] <= c) dp[0][c] = profits[0];
  }

  // process all sub-arrays for all the capacities
  for (let i = 1; i < n; i++) {
    for (let c = 1; c <= capacity; c++) {
      let profit1 = 0,
        profit2 = 0;
      // include the item, if it is not more than the capacity
      if (weights[i] <= c) profit1 = profits[i] + dp[i - 1][c - weights[i]];
      // exclude the item
      profit2 = dp[i - 1][c];
      // take maximum
      dp[i][c] = Math.max(profit1, profit2);
    }
  }

  // maximum profit will be at the bottom-right corner.
  return dp[n - 1][capacity];
};
