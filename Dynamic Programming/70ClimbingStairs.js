// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:
// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 * Time Complexity: O(n), we visit each element once
 * Space Complexity: O(n), we need to store n possible ways
 */
 const climbStairs = function(n) {
    if(n <= 2)
        return n;
    const ways = [0, 1, 2];
    
    for(let i = 3; i <= n; i++){
        ways[i] = ways[i-1] + ways[i-2];
    }
    
    return ways[n];
};

/**
 * @param {number} n
 * @return {number}
 * Time Complexity: O(n), we visit each element once
 * Space Complexity: O(1), constance space is being used
 */
const climbStairs = function (n) {
    const ways = [2, 1];

    for (let i = 3; i <= n; i++) {
        ways[i % 2] = ways[0] + ways[1];
    }

    return ways[n % 2];
};