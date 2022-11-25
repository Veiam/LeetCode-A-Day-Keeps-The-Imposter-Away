// Given a rod of length ‘n’, we are asked to cut the rod and sell the pieces in a way that will maximize the profit.
// We are also given the price of every piece of length ‘i’ where ‘1 <= i <= n’.

// for each rod length 'i' 
//   create a new set which includes one quantity of length 'i', and recursively process 
//       all rod lengths for the remaining length 
//   create a new set without rod length 'i', and recursively process for remaining rod lengths
// return the set from the above two sets with a higher sales price 

const solveRodCutting = function (lengths, prices, n) {
    const dp = Array(prices.length).fill(0).map(() => Array(n + 1).fill(0));

    for (let j = 1; j <= n + 1; j++) {
        if (lengths[0] <= j)
            dp[0][j] = dp[0][j - 1] + prices[0];
    }

    for (let i = 1; i < prices.length; i++) {
        for (let j = 1; j <= n; j++) {
            if (lengths[i] > j) {
                dp[i][j] = dp[i - 1][j];
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], prices[i] + dp[i][j - lengths[i]])
            }
        }
    }
    console.log(dp);
    return dp[prices.length - 1][n];
};

const lengths = [1, 2, 3, 4, 5];
const prices = [2, 6, 7, 10, 13];
console.log(`Maximum profit: ---> ${solveRodCutting(lengths, prices, 5)}`);

