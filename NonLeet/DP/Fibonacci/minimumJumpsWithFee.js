// Given a staircase with ‘n’ steps and an array of ‘n’ numbers representing the fee that you have to pay if you take the step.
// Implement a method to calculate the minimum fee required to reach the top of the staircase (beyond the top-most step).
// At every step, you have an option to take either 1 step, 2 steps, or 3 steps. You should assume that you are standing at the first step.

const findMinFee = function (fee) {
    const memoize = [];
    function findMinFeeRecursive(fee, index) {
        if (fee.length < 3) {
            return fee[0];
        }
        if (index >= fee.length) {
            return 0;
        }
        let fee1, fee2, fee3;

        if (typeof memoize[index] == 'undefined') {
            // if we take 1 step, we are left with 'n-1' steps;
            fee1 = findMinFeeRecursive(fee, index + 1);
            // similarly, if we took 2 steps, we are left with 'n-2' steps;
            fee2 = findMinFeeRecursive(fee, index + 2);
            // if we took 3 steps, we are left with 'n-3' steps;
            fee3 = findMinFeeRecursive(fee, index + 3);
            memoize[index] = Math.min(fee1, fee2, fee3) + fee[index];
        }


        return memoize[index];
    }
    return findMinFeeRecursive(fee, 0);
};

console.log(`Minimum fee needed: ---> ${findMinFee([1, 2, 5, 2, 1, 2])}`);
console.log(`Minimum fee needed: ---> ${findMinFee([2, 3, 4, 5])}`);


const findMinFee = function (fee) {
    const dp = Array(fee.length + 1).fill(0);
    dp[0] = 0; // if there are no steps, we dont have to pay any fee
    dp[1] = fee[0]; // only one step, so we have to pay its fee
    // for 2 steps, since we start from the first step, so we have to pay its fee
    // and from the first step we can reach the top by taking two steps, so
    // we dont have to pay any other fee.
    dp[2] = fee[0];

    // please note that dp[] has one extra element to handle the 0th step
    for (let i = 2; i < fee.length; i++) {
        dp[i + 1] = Math.min(fee[i] + dp[i], fee[i - 1] + dp[i - 1], fee[i - 2] + dp[i - 2]);
    }

    return dp[fee.length];
};