// Given a set of positive numbers, determine if there exists a subset whose sum is equal to a given number ‘S’.
// This problem follows the 0/1 Knapsack pattern and is quite similar to Equal Subset Sum Partition.
// for each number 'i' 


const canPartition = function (num, sum) {
    const n = num.length;

    // n x sum+1 2D Array.
    const dp = Array(n)
        .fill(false)
        .map(() => Array(sum + 1).fill(false));

    // Sum of 0 can be reached with an empty set.
    for (let i = 0; i < n; i++)
        dp[i][0] = true;

    // If the individual number is equal to sum, then we have a subset sum.
    for (let s = 1; s <= sum; s++) {
        dp[0][s] = num[0] == s;
    }

    // Go through each number
    for (let i = 1; i < n; i++) {
        // Go through all the possible sum
        for (let s = 1; s <= sum; s++) {
            // Check if we can get the sum 's' from the subset excluding the current number
            // create a new set WITHOUT number 'i', and recursively process the remaining numbers 
            if (dp[i - 1][s]) {
                dp[i][s] = dp[i - 1][s];
            }
            // Else include the number
            // create a new set which INCLUDES number 'i' if it does not exceed 'S', and recursively 
            // process the remaining numbers

            else if (sum >= num[i]) {
                // See if we can find a subset to get the remaining sum
                dp[i][s] = dp[i - 1][s - num[i]];
            }
        }
    }
    return dp[n - 1][sum];
};

const canPartition = function (num, sum) {
    const n = num.length;
    const dp = Array(sum + 1).fill(false);

    // handle sum=0, as we can always have '0' sum with an empty set
    dp[0] = true;

    // with only one number, we can have a subset only when the required sum is equal to its value
    for (let s = 1; s <= sum; s++) {
        dp[s] = num[0] == s;
    }

    // process all subsets for all sums
    for (let i = 1; i < n; i++) {
        for (let s = sum; s >= 0; s--) {
            // if dp[s]==true, this means we can get the sum 's' without num[i], hence we can move on to the next number
            // else we can include num[i] and see if we can find a subset to get the emaining sum
            if (!dp[s] && s >= num[i]) {
                dp[s] = dp[s - num[i]];
            }
        }
    }

    return dp[sum];
};