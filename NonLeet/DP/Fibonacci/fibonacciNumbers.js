// Recursive
const calculateFibonacci = function (n) {
    if (n < 2) {
        return n;
    }
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

console.log(`5th Fibonacci is ---> ${calculateFibonacci(5)}`);
console.log(`6th Fibonacci is ---> ${calculateFibonacci(6)}`);
console.log(`7th Fibonacci is ---> ${calculateFibonacci(7)}`);

// Top Down
const calculateFibonacci = function (n) {
    const memoize = [];

    function calculateFibonacciRecursive(n) {
        if (n < 2) {
            return n;
        }

        if (memoize[n]) {
            return memoize[n];
        }
        memoize[n] = calculateFibonacciRecursive(n - 1) + calculateFibonacciRecursive(n - 2);
        return memoize[n];
    }

    return calculateFibonacciRecursive(n);
};

// Bottom Up
const calculateFibonacci = function (n) {
    if (n < 2) return n;
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};


// Memory Optimzation
const calculateFibonacci = function (n) {
    if (n < 2) {
        return n;
    }
    let n1 = 0, n2 = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = n1 + n2;
        n1 = n2;
        n2 = temp;
    }
    return n2;
}

