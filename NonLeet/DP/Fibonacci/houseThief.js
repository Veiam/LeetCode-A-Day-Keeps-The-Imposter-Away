// Given a number array representing the wealth of n houses, determine the maximum amount of money the thief can steal without alerting the security system.

const findMaxSteal = function (wealth) {
    const memoize = [];

    function findMaxStealRecursive(wealth, index) {
        if (index > wealth.length - 1) {
            return 0;
        }
        if (typeof memoize[index] == 'undefined') {
            // we can either take the current house
            let route1 = findMaxStealRecursive(wealth, index + 2) + wealth[index];
            // or skip this one
            let route2 = findMaxStealRecursive(wealth, index + 1);
            memoize[index] = Math.max(route1, route2);
        }
        return memoize[index];

    }
    return findMaxStealRecursive(wealth, 0);
};

console.log(`Maximum stealing: ---> ${findMaxSteal([2, 5, 1, 3, 6, 2, 4])}`);
console.log(`Maximum stealing: ---> ${findMaxSteal([2, 10, 14, 8, 1])}`);

const findMaxSteal = function (wealth) {
    if (wealth.length === 0) return 0;
    const dp = Array(wealth.length + 1).fill(0); // '+1' to handle the zero house
    dp[0] = 0; // if there are no houses, the thief can't steal anything
    dp[1] = wealth[0]; // only one house, so the thief have to steal from it

    // please note that dp[] has one extra element to handle zero house
    for (let i = 1; i < wealth.length; i++) {
        // check if the current house is more than previous one.
        dp[i + 1] = Math.max(wealth[i] + dp[i - 1], dp[i]);
    }

    return dp[wealth.length];
};
