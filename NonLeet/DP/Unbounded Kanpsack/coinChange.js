// Given a number array to represent different coin denominations and a total amount ‘T’, 
// we need to find all the different ways to make a change for ‘T’ with the given coin denominations. 
// We can assume an infinite supply of coins, therefore, each coin can be chosen multiple times.

let countChange = function (denominations, total) {
    function countChangeRecursive(denominations, total, index) {
        if (total == 0) {
            return 1;
        }
        if (denominations.length === 0 || index >= denominations.length) {
            return 0;
        }

        // recursive call after selecting the coin at the currentIndex
        // if the coin at currentIndex exceeds the total, we shouldn't process this
        let sum1 = 0;
        if (denominations[index] <= total) {
            sum1 = countChangeRecursive(denominations, total - denominations[index], index);
        }
        // recursive call after excluding the coin at the currentIndex
        const sum2 = countChangeRecursive(denominations, total, index + 1);
        return sum1 + sum2;
    }
    return countChangeRecursive(denominations, total, 0);
};


let countChange = function (denominations, total) {
    const memoize = [];
    function countChangeRecursive(denominations, total, index) {
        if (total == 0) {
            return 1;
        }
        if (denominations.length === 0 || index >= denominations.length) {
            return 0;
        }
        memoize[index] = memoize[index] || [];
        if (typeof memoize[index][total] != 'undefined') {
            return memoize[index][total];
        }
        let sum1 = 0;
        // create a new set which includes one quantity of coin 'c' if it does not exceed 'T', and 
        // recursively call to process all coins 
        if (denominations[index] <= total) {
            sum1 = countChangeRecursive(denominations, total - denominations[index], index);
        }

        // create a new set without coin 'c', and recursively call to process the remaining coins 
        // return the count of sets who have a sum equal to 'T'
        sum2 = countChangeRecursive(denominations, total, index + 1);

        memoize[index][total] = sum1 + sum2;

        return memoize[index][total];
    }
    return countChangeRecursive(denominations, total, 0);
};

let countChange = function (denominations, total) {
    const dp = Array(denominations.length).fill(0).map(() => Array(total + 1).fill(0));
    for (let i = 0; i < denominations.length; i++) {
        dp[i][0] = 1;
    }

    for (let j = 1; j <= total; j++) {
        if (denominations[0] <= j) {
            dp[0][j] = dp[0][j - 1];
        }
    }

    for (let i = 1; i < denominations.length; i++) {
        for (let j = 1; j <= total; j++) {
            // Exclude the coin. Count all the coin combinations without the given coin up to the total ‘t’ => dp[index-1][t]
            if (denominations[i] > j) {
                dp[i][j] = dp[i - 1][j];
            }
            else {
                // Include the coin if its value is not more than ‘t’.
                // In this case, we will count all the coin combinations to get the remaining total: dp[index][t-denominations[index]]
                dp[i][j] = dp[i - 1][j] + dp[i][j - denominations[i]];
            }
        }
    }
    console.log(dp);
    return dp[denominations.length - 1][total];
};

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 5)}`);
