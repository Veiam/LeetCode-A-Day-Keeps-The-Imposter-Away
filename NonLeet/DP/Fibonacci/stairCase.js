// Given a stair with ‘n’ steps, implement a method to count how many possible ways are there 
// to reach the top of the staircase,given that, at every step you can either take 1 step, 2 steps, or 3 steps.

// recursive
const CountWays = function (n) {
    // base cases
    if (n == 0 || n == 1) {
        return 1;
    }
    if (n == 2) {
        return 2;
    }
    // if we take 1 step, we are left with 'n-1' steps;
    // similarly, if we took 2 steps, we are left with 'n-2' steps;
    // if we took 3 steps, we are left with 'n-3' steps;
    return CountWays(n - 1) + CountWays(n - 2) + CountWays(n - 3);
};

// top down memoize
const CountWays = function (n) {

    const memoize = [];
    function CountWaysRecursive(n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        if (n == 2) {
            return 2;
        }
        if (typeof memoize[n] == 'undefined') {
            memoize[n] = CountWays(n - 1) + CountWays(n - 2) + CountWays(n - 3);
        }

        return memoize[n];
    }
    return CountWaysRecursive(n)
};

// bottom up
const CountWays = function (n) {

    const dp = [1, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
    return dp[n];

};

// memory optimizatin
// CountWays(n) = CountWays(n-1) + CountWays(n-2) + CountWays(n-3) + ... + CountWays(n-k), for n >= k
const CountWays = function (n) {
    let n1 = 1, n2 = 1, n3 = 2;
    for (let i = 3; i <= n; i++) {
        [n1, n2, n3] = [n2, n3, n1 + n2 + n3];
    }
    return n3;
}