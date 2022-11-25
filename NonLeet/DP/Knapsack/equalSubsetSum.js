// Given a set of positive numbers, find if we can partition it into 
// two subsets such that the sum of elements in both the subsets is equal.
// This problem follows the 0/1 Knapsack pattern.
// Assume if S represents the total sum of all the given numbers, 
// hen the two equal subsets must have a sum equal to S/2. 
// This essentially transforms our problem to: "Find a subset of the given numbers that has a total sum of S/2".
// for each number 'i' 

function canPartitionRecursive(dp, num, sum, currentIndex) {
    // base check
    if (sum === 0) return true;

    if (num.length === 0 || currentIndex >= num.length) return false;

    dp[currentIndex] = dp[currentIndex] || [];
    // if we have not already processed a similar problem
    if (typeof dp[currentIndex][sum] === 'undefined') {
        // recursive call after choosing the number at the currentIndex
        // if the number at currentIndex exceeds the sum, we shouldn't process this
        // create a new set which INCLUDES number 'i' if it does not exceed 'S/2', and recursively 
        // process the remaining numbers
        if (num[currentIndex] <= sum) {
            if (canPartitionRecursive(dp, num, sum - num[currentIndex], currentIndex + 1)) {
                dp[currentIndex][sum] = true;
                return true;
            }
        }

        // recursive call after excluding the number at the currentIndex
        // create a new set WITHOUT number 'i', and recursively process the remaining items 
        // return true if any of the above sets has a sum equal to 'S/2', otherwise return false
        dp[currentIndex][sum] = canPartitionRecursive(dp, num, sum, currentIndex + 1);
    }
    return dp[currentIndex][sum];
}

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4])}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 1, 3, 4, 7])}`);
console.log(`Can partitioning be done: ---> ${canPartition([2, 3, 4, 6])}`);

let canPartition = function (num) {
    const n = num.length;
    // find the total sum
    let sum = 0;
    for (let i = 0; i < n; i++) sum += num[i];

    // if 'sum' is a an odd number, we can't have two subsets with same total
    if (sum % 2 != 0) return false;

    // we are trying to find a subset of given numbers that has a total sum of ‘sum/2’.
    sum /= 2;

    const dp = Array(n)
        .fill(false)
        .map(() => Array(sum + 1).fill(false));

    // populate the sum=0 column, as we can always have '0' sum without including any element
    for (let i = 0; i < n; i++) dp[i][0] = true;

    // with only one number, we can form a subset only when the required sum is equal to its value
    for (let s = 1; s <= sum; s++) {
        dp[0][s] = num[0] == s;
    }

    // process all subsets for all sums
    for (let i = 1; i < n; i++) {
        for (let s = 1; s <= sum; s++) {
            // Exclude the number. In this case, we will see if
            // we can get ‘s’ from the subset excluding this number: dp[i-1][s]
            if (dp[i - 1][s]) {
                dp[i][s] = dp[i - 1][s];

            } else if (s >= num[i]) {
                // Include the number if its value is not more than ‘s’.
                // In this case, we will see if we can find a subset to get the remaining sum: dp[i-1][s-num[i]
                dp[i][s] = dp[i - 1][s - num[i]];
            }
        }
    }

    // the bottom-right corner will have our answer.
    return dp[n - 1][sum];
};