// Given a number sequence, find the minimum number of elements that should be deleted to make the remaining sequence sorted.


const findMinimumDeletions = function (nums) {
    const dp = [1];

    let maxLength = 1;
    for (let i = 1; i < nums.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            // If the number at the current index is bigger than the number at the previous index, we increment the count for LIS up to the current index.
            // But if there is a bigger LIS without including the number at the current index, we take that.
            if (nums[i] > nums[j] && dp[i] <= dp[j]) {
                dp[i] = dp[j] + 1;
                maxLength = Math.max(dp[i], maxLength);
            }
        }
    }
    // subtracting the length of LIS from the length of the input array to get
    // minimum number of deletions
    return nums.length - maxLength;
};

console.log(`Minimum deletion needed: ---> ${findMinimumDeletions([4, 2, 3, 6, 10, 1, 12])}`);
console.log(`Minimum deletion needed: ---> ${findMinimumDeletions([-4, 10, 3, 7, 15])}`);
console.log(`Minimum deletion needed: ---> ${findMinimumDeletions([3, 2, 1, 0])}`);
