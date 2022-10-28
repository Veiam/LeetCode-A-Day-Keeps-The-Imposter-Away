// Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].
// You may return the answer in any order.

// Example 1:
// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

// Example 2:
// Input: n = 1, k = 1
// Output: [[1]]

// Constraints:
// 1 <= n <= 20
// 1 <= k <= n

/**
 * Recursive, backtracking
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * Time complexity : O(k*C_N^k), where C_N^k = N!/((N - k)! k!) ​is a number of combinations to build.
 * append / pop (add / removeLast) operations are constant-time ones and
 * the only consuming part here is to append the built combination of length k to the output.
 * Space complexity : O(k*C_N^k), where C_N^k = N!/((N - k)! k!) ​is a number of combinations to build.
 */
const combine = function (n, k) {
    // output array
    const res = [];
    function backtrack(first, cur) {
        // if the length matches required combination length
        if (cur.length === k) {
            // push it by creating a new array
            // this prevents cur array inside of res from being
            // overwritten later
            res.push(Array.from(cur));
        }

        // loop through
        for (let i = first; i <= n; i++) {
            // add new num
            cur.push(i);
            // recursive call with num + 1
            backtrack(i + 1, cur);
            // remove last num
            cur.pop();
        }
    }
    // initial call
    backtrack(1, []);
    return res;
};


/**
 * Iterative, Lexicographic (binary sorted) combinations
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * Time complexity : O(k*C_N^k), where C_N^k = N!/((N - k)! k!) ​is a number of combinations to build.
 * The external while loop is executed C_N^k times since the numbet of combinatiosn is C_N^k. The inner while loop
 * is performed C_N-j^K-j times for a given j. In average over C_N^k visits from the external loop that results in less than one
 * execution per visit. Hence the most consuming part here is to append each combination of length K (C_N^k combinations in total)
 * to the output that takes O(k*C_N^k) time.
 * Space complexity : O(k*C_N^k), where C_N^k = N!/((N - k)! k!) ​is a number of combinations to build.
 */
const combine = function (n, k) {
    const nums = [], res = [];

    // first combination
    for (let i = 1; i <= k; i++) {
        nums[i - 1] = i;
    }

    //  serve as a upper limit
    nums.push(n + 1);
    // pointer
    let j = 0;
    while (j < k) {
        // push the k length sub array to the res
        res.push(nums.slice(0, k));
        j = 0;
        // if the next index matches the current index + 1
        while ((j < k) && nums[j + 1] === (nums[j] + 1)) {
            // increase the j index by 1 until it no longer matches 
            nums[j] = j + 1;
            j++;
        }
        // ensures above while condition will be true
        nums[j] = nums[j] + 1;
    }
    return res;
};
