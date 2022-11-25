// Given a set of positive numbers, partition the set into two subsets with a minimum difference between their subset sums.
// This problem follows the 0/1 Knapsack pattern and can be converted into a Subset Sum problem.

let canPartition = function (num) {
    function canPartitionRecursive(num, currentIndex, sum1, sum2) {
        // base check
        if (currentIndex === num.length)
            return Math.abs(sum1 - sum2);

        // recursive call after including the number at the currenIndex in the first set
        //   add number 'i' to S1 and recursively process the remaining numbers
        //   add number 'i' to S2 and recursively process the remaining numbers
        const diff1 = canPartitionRecursive(num, currentIndex + 1, sum1 + num[currentIndex], sum2);
        const diff2 = canPartitionRecursive(num, currentIndex + 1, sum1, sum2 + num[currentIndex]);
        // return the minimum absolute difference of the above two sets 
        return Math.min(diff1, diff2);
    }

    return canPartitionRecursive(num, 0, 0, 0);
};

console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 3, 9])}`);
console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 7, 1, 5])}`);
console.log(`Minimum subset difference is: ---> ${canPartition([1, 3, 100, 4])}`);

const canPartition = function (num) {
    const dp = [];

    function canPartitionRecursive(num, currentIndex, sum1, sum2) {
        // base check
        if (currentIndex === num.length)
            return Math.abs(sum1 - sum2);


        // if dp[currentIndex] does not exist then set it to empty
        dp[currentIndex] = dp[currentIndex] || [];

        // check if we have not already processed similar problem
        if (typeof dp[currentIndex][sum1] == 'undefined') {
            // recursive call after including the number at the currenIndex in the first set
            const diff1 = canPartitionRecursive(num, currentIndex + 1, sum1 + num[currentIndex], sum2);

            // recursive call after including the number at the currentIndex in the second set
            const diff2 = canPartitionRecursive(num, currentIndex + 1, sum1, sum2 + num[currentIndex]);

            dp[currentIndex][sum1] = Math.min(diff1, diff2);
        }
    }
    return canPartitionRecursive(num, 0, 0, 0);
};

const canPartition = function (num) {
    const n = num.length + 1;
    let sum = num.reduce((total, num) => { return total + num; });

    sum /= 2;
    const dp = Array(n)
        .fill(false)
        .map(() => { Array(sum + 1).fill(false); });

    // populate the sum=0 colums, as we can always form '0' sum with an empty set
    for (let i = 0; i < n; i++) {
        dp[i][0] = true;
    }

    // with only one number, we can form a subset only when the required sum is equal to that number;
    for (let s = 1; s < sum; s++) {
        dp[0][s] = num[0] == s;
    }

    // process all subsets for all sumbs
    for (let i = 1; i < n; i++) {
        for (let s = 1; s <= sum; s++) {
            // Exclude the number.
            // In this case, we will see if we can get the sum ‘s’ from the subset excluding this number => dp[index-1][s]
            if (dp[i - 1][s]) {
                dp[i][s] = dp[i - 1][s];
            }
            // Include the number if its value is not more than ‘s’.
            // In this case, we will see if we can find a subset to get the remaining sum => dp[index-1][s-num[index]]
            else if (sum >= num[i]) {
                dp[i][s] = dp[i - 1][s - num[i]];
            }
        }
    }
    let sum1 = 0;

    // Find the largest index in the last row which is true
    for (let i = requiredSum; i >= 0; i--) {
        if (dp[n - 1][i] === true) {
            sum1 = i;
            break;
        }
    }
    const sum2 = sum - sum1;

    return Math.abs(sum2 - sum1);
};