//Given a set of positive numbers, find the total number of subsets whose sum is equal to a given number ‘S’.

const countSubsets = function (num, sum) {
    function countSubsetsRecursive(num, sum, currentIndex) {
        // base checks
        if (sum === 0) return 1;

        if (num.length === 0 || currentIndex >= num.length) {
            return 0;
        }

        // recursive call after selecting the number at the currentIndex
        // if the number at currentIndex exceeds the sum, we shouldn't process this
        let sum1 = 0;
        if (num[currentIndex] <= sum) {
            sum1 = countSubsetsRecursive(num, sum - num[currentIndex], currentIndex + 1);
        }

        // recursive call after excluding the number at the currentIndex
        const sum2 = countSubsetsRecursive(num, sum, currentIndex + 1);
        return sum1 + sum2;
    }

    return countSubsetsRecursive(num, sum, 0);
};

console.log(`Count of subset sum is: ---> ${countSubsets([1, 1, 2, 3], 4)}`);
console.log(`Count of subset sum is: ---> ${countSubsets([1, 2, 7, 1, 5], 9)}`);

const countSubsets = function (num, sum) {
    const dp = [];
    function countSubsetsRecursive(num, sum, currentIndex, dp) {
        // base check
        if (sum === 0)
            return 1;

        if (num.length === 0 || currentIndex >= num.length) {
            return 0;
        }

        // if dp[currentIndex] does not exist then set it to empty
        dp[currentIndex] = dp[currentIndex] || [];

        if (typeof dp[currentIndex][sum] == 'undefined') {
            let sum1 = 0;
            // create a new set which includes number 'i' if it does not exceed 'S', and recursively   
            // process the remaining numbers and sum
            if (num[currentIndex] <= sum) {
                sum1 = countSubsetsRecursive(num, sum - num[currentIndex], currentIndex + 1);
            }

            // create a new set without number 'i', and recursively process the remaining numbers 
            // return the count of subsets who has a sum equal to 'S'
            const sum2 = countSubsetsRecursive(num, sum, currentIndex + 1);
            dp[currentIndex][sum] = sum1 + sum2;
        }

        return dp[currentIndex][sum];
    }

    return countSubsetsRecursive(num, sum, 0);
};

let countSubsets = function (num, sum) {
    const n = num.length;
    const dp = Array(n)
        .fill(0)
        .map(() => Array(sum + 1).fill(0));

    // populate the sum=0 columns, as we will always have an empty set for zero sum
    for (let i = 0; i < n; i++) {
        dp[i][0] = 1;
    }

    // with only one number, we can form a subset only when the required sum is equal to its value
    for (let s = 1; s <= sum; s++) {
        dp[0][s] = num[0] == s ? 1 : 0;
    }

    // process all subsets for all sums
    for (let i = 1; i < num.length; i++) {
        for (let s = 1; s <= sum; s++) {
            // Exclude the number.
            // Count all the subsets without the given number up to the given sum => dp[index-1][sum]
            dp[i][s] = dp[i - 1][s];
            // Include the number if its value is not more than the ‘sum’.
            // In this case, we will count all the subsets to get the remaining sum => dp[index-1][sum-num[index]]
            if (s >= num[i]) {
                dp[i][s] += dp[i - 1][s - num[i]];
            }
        }
    }

    // the bottom-right corner will have our answer.
    return dp[num.length - 1][sum];
};

console.log(`Count of subset sum is: ---> ${countSubsetsBottom([1, 1, 2, 3], 4)}`);
console.log(`Count of subset sum is: ---> ${countSubsetsBottom([1, 2, 7, 1, 5], 9)}`);

const countSubsets = function (num, sum) {
    const n = num.length;
    const dp = Array(sum + 1).fill(0);
    dp[0] = 1;

    // with only one number, we can form a subset only when the required sum is equal to its value
    for (let s = 1; s <= sum; s++) {
        dp[s] = num[0] == s ? 1 : 0;
    }

    // process all subsets for all sums
    for (let i = 1; i < num.length; i++) {
        for (let s = sum; s >= 0; s--) {
            if (s >= num[i]) {
                // add all subset count
                dp[s] += dp[s - num[i]];
            }
        }
    }

    return dp[sum];
};
console.log(`Count of subset sum is: ---> ${countSubsets([1, 1, 2, 3], 4)}`);
console.log(`Count of subset sum is: ---> ${countSubsets([1, 2, 7, 1, 5], 9)}`);