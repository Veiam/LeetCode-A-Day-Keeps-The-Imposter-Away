// Given a number sequence, find the length of its Longest Increasing Subsequence (LIS).
// In an increasing subsequence, all the elements are in increasing order (from lowest to highest).
const findLISLength = function (nums) {
    const memoize = [];
    function findLISLengthRecursive(nums, currentIndex, previousIndex) {
        if (currentIndex === nums.length) {
            return 0;
        }
        memoize[currentIndex] = memoize[currentIndex] || [];
        if (typeof memoize[currentIndex][previousIndex + 1] == 'undefined') {
            // If the current number is greater than the previous number that we included,
            // we can increment our count and make a recursive call for the remaining array.
            let c1 = 0;
            if (previousIndex === -1 || nums[currentIndex] > nums[previousIndex]) {
                c1 = 1 + findLISLengthRecursive(nums, currentIndex + 1, currentIndex);
            }
            // We can skip the current number to make a recursive call for the remaining array.
            const c2 = findLISLengthRecursive(nums, currentIndex + 1, previousIndex);
            memoize[currentIndex][previousIndex + 1] = Math.max(c1, c2);
        }
        return memoize[currentIndex][previousIndex + 1];
    }
    return findLISLengthRecursive(nums, 0, -1);
};

console.log(
    `Length of Longest Increasing Subsequence: ---> ${findLISLength([4, 2, 3, 6, 10, 1, 12])}`
);
console.log(`Length of Longest Increasing Subsequence: ---> ${findLISLength([-4, 10, 3, 7, 15])}`);

const findLISLength = function (nums) {
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
    return maxLength;
};