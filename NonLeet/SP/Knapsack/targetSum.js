// You are given a set of positive numbers and a target sum ‘S’. Each number should be assigned either a ‘+’ or ‘-’ sign.
// We need to find the total ways to assign symbols to make the sum of the numbers equal to the target ‘S’.

const findTargetSubsets = function (num, s) {
    const memoize = [];
    function findTargetSubsetsRecursive(num, s, index) {
        if (index >= num.length && s == 0) {
            return 1;
        }
        else if (index >= num.length) {
            return 0;
        }

        memoize[index] = memoize[index] || [];

        if (typeof memoize[index][s] == 'undefined') {
            let c1 = findTargetSubsetsRecursive(num, s - num[index], index + 1);
            let c2 = findTargetSubsetsRecursive(num, s + num[index], index + 1);
            memoize[index][s] = c1 + c2;
        }
        return memoize[index][s];
    }
    return findTargetSubsetsRecursive(num, s, 0);
};


console.log(`Count of Target sum is: ---> ${findTargetSubsets([1, 1, 2, 3], 1)}`);
console.log(`Count of Target sum is: ---> ${findTargetSubsets([1, 2, 7, 1], 9)}`);


const findTargetSubsets = function (num, s) {
    let sum = num.reduce((total, value) => total += value);
    sum += s;
    // if 's + totalSum' is odd, we can't find a subset with sum equal to '(s + totalSum) / 2'
    if (sum % 2 !== 0) {
        return 0;
    }
    sum /= 2;

    const n = num.length;
    const dp = Array(n).fill(0).map(() => Array(sum + 1).fill(0));

    for (let i = 0; i < n; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= sum; i++) {
        dp[0][i] = num[0] == i ? 1 : 0;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j <= sum; j++) {
            dp[i][j] = dp[i - 1][j];
            if (num[i] <= j) {
                dp[i][j] += dp[i - 1][j - num[i]];
            }
        }
    }
    return dp[n - 1][sum];
};


console.log(`Count of Target sum is: ---> ${findTargetSubsets([1, 1, 2, 3], 1)}`);
console.log(`Count of Target sum is: ---> ${findTargetSubsets([1, 2, 7, 1], 9)}`);


const findTargetSubsets = function (num, s) {
    let sum = num.reduce((total, value) => total += value);
    sum += s;
    // if 's + totalSum' is odd, we can't find a subset with sum equal to '(s + totalSum) / 2'
    if (sum % 2 !== 0) {
        return 0;
    }
    sum /= 2;

    const n = num.length;
    const dp = Array(sum + 1).fill(0);
    dp[0] = 1;

    // with only one number, we can form a subset only when the required sum is equal to the number
    for (let i = 1; i <= sum; i++) {
        dp[i] = num[0] == i ? 1 : 0;
    }

    // process all subsets for all sums
    for (let i = 1; i < n; i++) {
        for (let j = sum; j >= 0; j--) {
            if (num[i] <= j) {
                dp[j] += dp[j - num[i]];
            }
        }
    }
    return dp[sum];
};
