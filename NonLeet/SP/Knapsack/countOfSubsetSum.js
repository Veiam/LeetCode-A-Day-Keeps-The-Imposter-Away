// Given a set of positive numbers, find the total number of subsets whose sum is equal to a given number ‘S’.
const countSubsets = function (num, sum) {
    const memoize = [];
    function countSubsetsRecursive(num, sum, index) {
        if (sum === 0) {
            return 1;
        }
        if (index >= num.length) {
            return 0;
        }
        memoize[index] = memoize[index] || [];
        // check if we have not already processed a similar problem
        if (typeof memoize[index][sum] === 'undefined') {
            let c1 = 0;
            // recursive call after choosing the number at the currentIndex
            // if the number at currentIndex exceeds the sum, we shouldn't process this
            if (num[index] <= sum) {
                c1 = countSubsetsRecursive(num, sum - num[index], index + 1);
            }
            // recursive call after excluding the number at the currentIndex
            const c2 = countSubsetsRecursive(num, sum, index + 1);
            memoize[index][sum] = c1 + c2;
        }
        return memoize[index][sum];
    }
    return countSubsetsRecursive(num, sum, 0);
};
console.log(`Count of subset sum is: ---> ${countSubsets([1, 1, 2, 3], 4)}`);
console.log(`Count of subset sum is: ---> ${countSubsets([1, 2, 7, 1, 5], 9)}`);

const countSubsets = function (num, sum) {
    const n = num.length;
    const dp = Array(n).fill(0).map(() => Array(sum + 1).fill(0));

    // populate the sum=0 columns, as we will always have an empty set for zero sum
    for (let i = 0; i < n; i++) {
        dp[i][0] = 1;
    }
    // with only one number, we can form a subset only when the required sum is equal to its value
    for (let i = 0; i <= sum; i++) {
        if (i == num[0]) {
            dp[0][i] = 1;
        }
    }
    // process all subsets for all sums
    for (let i = 1; i < n; i++) {
        for (let s = 1; s <= sum; s++) {
            // exclude the number
            dp[i][s] = dp[i - 1][s];
            // include the number, if it does not exceed the sum
            if (num[i] <= s) {
                dp[i][s] += dp[i - 1][s - num[i]];
            }
        }
    }
    // the bottom-right corner will have our answer.
    return dp[n - 1][sum];
};

const countSubsets = function (num, sum) {
    const n = num.length;
    const dp = Array(sum + 1).fill(0);
    dp[0] = 1;

    // with only one number, we can form a subset only when the required sum is equal to its value
    for (let i = 0; i <= sum; i++) {
        if (i == num[0]) {
            dp[i] = 1;
        }
    }
    // process all subsets for all sums
    for (let i = 1; i < n; i++) {
        for (let s = sum; s >= 0; s--) {
            if (num[i] <= s) {
                dp[s] += dp[s - num[i]];
            }
        }
    }
    // the bottom-right corner will have our answer.
    return dp[sum];
}
