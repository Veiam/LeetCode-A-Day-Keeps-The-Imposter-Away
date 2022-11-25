// Given a number array to represent different coin denominations and a total amount ‘T’,
// we need to find the minimum number of coins needed to make a change for ‘T’.
// We can assume an infinite supply of coins, therefore, each coin can be chosen multiple times.

let countChange = function (denominations, total) {
    function countChangeRecursive(denominations, total, index) {
        if (total == 0) {
            return 0;
        }
        if (denominations.length === 0 || index >= denominations.length) {
            return Infinity;
        }
        let count1 = Infinity;
        // create a new set which includes one quantity of coin 'c' if it does not exceed 'T', and 
        // recursively call to process all coins 
        if (denominations[index] <= total) {
            let temp = countChangeRecursive(denominations, total - denominations[index], index);
            if (temp != Infinity) {
                count1 = temp + 1;
            }
        }
        // create a new set without coin 'c', and recursively call to process the remaining coins 
        // return the count of coins from the above two sets with a smaller number of coins
        const count2 = countChangeRecursive(denominations, total, index + 1);
        return Math.min(count1, count2);
    }
    let result = countChangeRecursive(denominations, total, 0)
    return result == Infinity ? -1 : result;
};

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 5)}`);
console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 11)}`);
console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 7)}`);
console.log(`Number of ways to make change: ---> ${countChange([3, 5], 7)}`);

let countChange = function (denominations, total) {
    const memoize = [];
    function countChangeRecursive(denominations, total, index) {
        if (total == 0) {
            return 0;
        }
        if (denominations.length === 0 || index >= denominations.length) {
            return Infinity;
        }
        memoize[index] = memoize[index] || [];

        if (typeof memoize[index][total] != 'undefined') {
            return memoize[index][total];
        }

        // recursive call after selecting the coin at the currentIndex
        // if the coin at the currentIndex exceeds the total, we shouldn't process this
        let count1 = Infinity;

        if (denominations[index] <= total) {
            const temp = countChangeRecursive(denominations, total - denominations[index], index);
            if (temp != Infinity) {
                count1 = temp + 1;
            }
        }
        // recursive call after excluding the coin at the currentIndex
        const count2 = countChangeRecursive(denominations, total, index + 1);

        memoize[index, total] = Math.min(count1, count2);
        return memoize[index, total];
    }
    let result = countChangeRecursive(denominations, total, 0)
    return result == Infinity ? -1 : result;
};


let countChange = function (denominations, total) {
    if (denominations.includes(total)) {
        return 1;
    }
    if (denominations.length == 0) {
        return -1;
    }
    const dp = Array(denominations.length).fill(0)
        .map(() => Array(total + 1).fill(0));

    // populate the total=0 columns, as we don't need any coin to make zero total
    for (let i = 0; i < denominations.length; i++) {
        if (denominations[i] <= total) {
            dp[i][0] = 0
        }
    }
    for (let j = 1; j <= total; j++) {
        if (denominations[0] <= j) {
            dp[0][j] = dp[0][j - 1] + 1;
        }
    }
    for (let i = 1; i < denominations.length; i++) {
        for (let j = 1; j <= total; j++) {
            // Exclude the coin: In this case, we will take the minimum coin count from the previous set => dp[index-1][t]
            if (denominations[i] > j) {
                dp[i][j] = dp[i - 1][j];
            }
            else {
                // Include the coin if its value is not more than ‘t’: In this case,
                // we will take the minimum count needed to get the remaining total,
                // plus include ‘1’ for the current coin => dp[index][t-denominations[index]] + 1
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - denominations[i]] + 1);
            }
        }
    }
    let result = dp[denominations.length - 1][total];
    return result == 1 ? -1 : result;

};


