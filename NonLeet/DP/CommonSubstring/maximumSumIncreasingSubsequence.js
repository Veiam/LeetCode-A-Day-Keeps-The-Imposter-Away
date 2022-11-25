//Given a number sequence, find the increasing subsequence with the highest sum. Write a method that returns the highest sum.

const findMSIS = function (nums) {
    const dp = [];

    function findMSISRecursive(nums, currentIndex, previousIndex, sum) {
        if (currentIndex === nums.length) return sum;

        const subProblemKey = `${currentIndex}-${previousIndex}-${sum}`;
        if (typeof dp[subProblemKey] === 'undefined') {
            // include nums[currentIndex] if it is larger than the last included number
            // If the current number is greater than the previous number that we included,
            // we include that number in a running sum and make a recursive call for the remaining array.
            let s1 = sum;
            if (previousIndex == -1 || nums[currentIndex] > nums[previousIndex]) {
                s1 = findMSISRecursive(nums, currentIndex + 1, currentIndex, sum + nums[currentIndex]);
            }

            // excluding the number at currentIndex
            // We can skip the current number to make a recursive call for the remaining array.
            const s2 = findMSISRecursive(nums, currentIndex + 1, previousIndex, sum);
            dp[subProblemKey] = Math.max(s1, s2);
        }

        return dp[subProblemKey];
    }
    return findMSISRecursive(nums, 0, -1, 0);
};


// Which means we can come up with an algorithm that include the current one if only if the current number isn't higher than the sum
const findMSIS = function (nums) {
    let dp = [nums[0]];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i];
        for (let j = 0; j < i; j++) {
            // If the number at the current index is bigger than the number at the previous index,
            // we include that number in the sum for an increasing sequence up to the current index.
            // But if there is a maximum sum increasing subsequence (MSIS),
            // without including the number at the current index, we take that.
            if (nums[i] > nums[j] && dp[i] < dp[j] + nums[i]) {
                dp[i] = dp[j] + nums[i];
            }
        }
        max = Math.max(dp[i], max);
    }
    return max;
};

console.log(`Maximum Sum Increasing Subsequence is: ---> ${findMSIS([4, 1, 2, 6, 10, 1, 12])}`);
console.log(`Maximum Sum Increasing Subsequence is: ---> ${findMSIS([-4, 10, 3, 7, 15])}`);
