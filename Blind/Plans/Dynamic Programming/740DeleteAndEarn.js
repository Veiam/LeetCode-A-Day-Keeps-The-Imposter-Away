// You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:

// Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
// Return the maximum number of points you can earn by applying the above operation some number of times.

// Example 1:
// Input: nums = [3,4,2]
// Output: 6
// Explanation: You can perform the following operations:
// - Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
// - Delete 2 to earn 2 points. nums = [].
// You earn a total of 6 points.

// Example 2:
// Input: nums = [2,2,3,3,3,4]
// Output: 9
// Explanation: You can perform the following operations:
// - Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3].
// - Delete a 3 again to earn 3 points. nums = [3].
// - Delete a 3 once more to earn 3 points. nums = [].
// You earn a total of 9 points.

// Constraints:
// 1 <= nums.length <= 2 * 104
// 1 <= nums[i] <= 104

/**
 * Top-down
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(n + k), length of nums + max number
 * Space Complexity: O(n + k), store sum of identifical nums and store memoization
 */
const deleteAndEarn = function (nums) {
    const numSum = new Map();
    let maxNum = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!(numSum.has(num))) {
            numSum.set(num, 0);
            maxNum = Math.max(maxNum, num);
        }
        numSum.set(num, num + numSum.get(num));
    }

    const memo = {};
    function maxPoints(pos) {
        if (pos <= 1) {
            return pos === 1 ? (numSum.get(1) || 0) : 0;
        }

        if (typeof memo[pos] === 'undefined') {
            let take = (numSum.get(pos) || 0) + maxPoints(pos - 2);
            let skip = maxPoints(pos - 1);
            memo[pos] = Math.max(take, skip);
        }
        return memo[pos];

    }

    return maxPoints(maxNum);
};

/**
 * Bottom-Up
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(n + k), length of nums + max number
 * Space Complexity: O(n), store sum of identifical nums
 */
const deleteAndEarn = function (nums) {
    const numSum = new Map();
    let maxNum = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!(numSum.has(num))) {
            numSum.set(num, 0);
            maxNum = Math.max(maxNum, num);
        }
        numSum.set(num, num + numSum.get(num));
    }

    const dp = [0, numSum.get(1) || 0];

    for (let i = 2; i <= maxNum; i++) {
        const cur = dp[i % 2] + (numSum.get(i) || 0);
        dp[i % 2] = Math.max(cur, dp[(i + 1) % 2]);
    }
    return dp[maxNum % 2];
};

/**
 * Iterate over elements to avoid iterating through gaps
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(n * logn), iterate through list after sorting
 * Space Complexity: O(n), store sum of identifical nums
 */
const deleteAndEarn = function (nums) {
    const numSum = {};
    let maxNum = 0;
    nums.forEach((num) => {
        if (!(num in numSum)) {
            numSum[num] = 0;
            maxNum = Math.max(maxNum, num);
        }
        numSum[num] += num;
    })

    const sorted = Array.from(new Set(nums)).sort((a, b) => a - b);
    // or const sorted = Array.from(Object.keys(numSum).map(Number)).sort((a,b) => a-b);

    let twoBack = 0;
    let oneBack = numSum[sorted[0]];
    for (let i = 1; i < sorted.length; i++) {
        const current = sorted[i];
        const prev = sorted[i - 1];
        const temp = oneBack
        if (current !== prev + 1) {
            oneBack += numSum[current];
        }
        else {
            oneBack = Math.max(twoBack + numSum[current], oneBack);
        }
        twoBack = temp;
    }
    return oneBack;
};

/**
 * Combine bottom-up and iterate through elements
 * @param {number[]} nums
 * @return {number}
 * Time complexity: O(N+min(k,N⋅log(N)))
 * Approach 3 has a time complexity of O(N + k)O(N+k). Approach 4 has a time complexity of O(N \cdot log(N))O(N⋅log(N)). When k is large compared to N, approach 4 is faster. When N is not large compared to k, such as in the example nums = [1, 2, 3, 4, ..., 9997, 9998, 9999], we should use approach 3.
 * It should be noted that the time complexity O(N \cdot log(N))O(N⋅log(N)) is for the worst case. We are actually only sorting the number of keys in points, which is equal to the number of unique elements in nums. When we precompute points, we can find the number of keys n as well as k. With n and k, we can decide if approach 3 or approach 4 is faster, and then perform the faster one.
 * For approach 3, we iterate k = maxNumber times. For approach 4, we iterate n times after performing n * log(n) operations to sort. If k < n + n * log(n), then it is better to use the algorithm from approach 3. Otherwise, it might be more efficient to use the algorithm from approach 4.
 * Space complexity: O(N)
 */
const deleteAndEarn = function (nums) {
    const numSum = {};
    let maxNum = 0;
    nums.forEach((num) => {
        if (!(num in numSum)) {
            numSum[num] = 0;
            maxNum = Math.max(maxNum, num);
        }
        numSum[num] += num;
    })

    const length = numSum.length;
    if (maxNum > length + length * Math.log(length) / Math.log(2)) {
        const sorted = Array.from(Object.keys(numSum).map(Number)).sort((a, b) => a - b);
        let twoBack = 0;
        let oneBack = numSum[sorted[0]];
        for (let i = 1; i < sorted.length; i++) {
            const current = sorted[i];
            const prev = sorted[i - 1];
            const temp = oneBack
            if (current !== prev + 1) {
                oneBack += numSum[current];
            }
            else {
                oneBack = Math.max(twoBack + numSum[current], oneBack);
            }
            twoBack = temp;
        }
        return oneBack;
    }
    else {
        const dp = [0, numSum[1] || 0];
        for (let i = 2; i <= maxNum; i++) {
            const cur = dp[i % 2] + (numSum[i] || 0);
            dp[i % 2] = Math.max(cur, dp[(i + 1) % 2]);
        }
        return dp[maxNum % 2];
    }

};