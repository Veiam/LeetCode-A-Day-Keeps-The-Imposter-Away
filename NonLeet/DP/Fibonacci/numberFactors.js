// Given a number ‘n’, implement a method to count how many possible ways there are to express ‘n’ as the sum of 1, 3, or 4.

// recursive
const CountWays = function (n) {
    // base case, we don't need to subtract any thing, so there is only one way
    if (n < 3) {
        return 1;
    }
    // '3' can be expressed as {1,1,1}, {3}
    if (n < 4) {
        return 2;
    }
    // if we subtract 1, we are left with 'n-1'
    // if we subtract 3, we are left with 'n-3'
    // if we subtract 4, we are left with 'n-4'
    return CountWays(n - 1) + CountWays(n - 3) + CountWays(n - 4);
};

console.log(`Number of ways: ---> ${CountWays(4)}`);
console.log(`Number of ways: ---> ${CountWays(5)}`);
console.log(`Number of ways: ---> ${CountWays(6)}`);

/// top down
const CountWays = function (n) {
    const memoize = [];
    function CountWaysRecursive(n) {
        if (n < 3) {
            return 1;
        }
        if (n < 4) {
            return 2;
        }
        if (!memoize[n]) {
            memoize[n] = CountWaysRecursive(n - 1) + CountWaysRecursive(n - 3) + CountWaysRecursive(n - 4);
        }
        return memoize[n];
    }
    return CountWaysRecursive(n);
};

// bottom up
// CountWays(n) = CountWays(n-1) + CountWays(n-3) + CountWays(n-4), for n >= 4
const CountWays = function (n) {
    const dp = [1, 1, 1, 2];
    for (let i = 4; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 3] + dp[i - 4];
    }
    return dp[n];
};