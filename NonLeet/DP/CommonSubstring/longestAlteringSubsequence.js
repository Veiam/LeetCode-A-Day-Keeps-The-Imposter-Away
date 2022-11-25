const findLASLength = function (nums) {
    const dp = [];
    function findLASLengthRecursive(nums, currentIndex, previousIndex, isAsc) {
        if (currentIndex === nums.length) return 0;

        let c1 = 0;

        dp[currentIndex] = dp[currentIndex] || [];
        dp[currentIndex][previousIndex] = dp[currentIndex][previousIndex] || [];
        if (typeof dp[currentIndex][previousIndex][isAsc] == 'undefined') {
            // if ascending, the next element should be bigger
            // If the element at ‘i’ is bigger than the last element we considered,
            // we include the element at ‘i’ and recursively process the remaining array to find the next element in descending order.
            if (isAsc) {
                if (previousIndex == -1 || nums[previousIndex] < nums[currentIndex])
                    c1 = 1 + findLASLengthRecursive(nums, currentIndex + 1, currentIndex, !isAsc);
            } else {
                // if descending, the next element should be smaller
                // If the element at ‘i’ is smaller than the last element we considered,
                // we include the element at ‘i’ and recursively process the remaining array to find the next element in ascending order.
                if (previousIndex == -1 || nums[previousIndex] > nums[currentIndex])
                    c1 = 1 + findLASLengthRecursive(nums, currentIndex + 1, currentIndex, !isAsc);
            }
            // skip the current element
            // In addition to the above two cases, we can always skip the element ‘i’ to recurse for the remaining array.
            // This will ensure that we try all subsequences.
            let c2 = findLASLengthRecursive(nums, currentIndex + 1, previousIndex, isAsc);
            dp[currentIndex][previousIndex][isAsc] = Math.max(c1, c2);
        }
        return dp[currentIndex][previousIndex][isAsc];
    }

    // we have to start with two recursive calls, one where we will consider that the first element is
    // bigger than the second element and one where the first element is smaller than the second element
    return Math.max(
        findLASLengthRecursive(nums, 0, -1, true),
        findLASLengthRecursive(nums, 0, -1, false)
    );
};

console.log(`Length of Longest Alternating Subsequence: ---> ${findLASLength([1, 2, 3, 4])}`);
console.log(`Length of Longest Alternating Subsequence: ---> ${findLASLength([3, 2, 1, 4])}`);
console.log(`Length of Longest Alternating Subsequence: ---> ${findLASLength([1, 3, 2, 4])}`);

const findLASLength = function (nums) {
    if (nums.length === 0) return 0;
    // dp[i][0] = stores the LAS ending at 'i' such that the last two elements are in ascending order
    // dp[i][1] = stores the LAS ending at 'i' such that the last two elements are in descending order
    const dp = Array(nums.length)
        .fill(0)
        .map(() => Array(2).fill(0));

    let maxLength = 1;
    for (let i = 0; i < nums.length; i++) {
        // every single element can be considered as a LAS of length 1
        dp[i][0] = dp[i][1] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                // if nums[i] is BIGGER than nums[j] then we will consider the LAS ending at 'j' where the
                // last two elements were in DESCENDING order
                dp[i][0] = Math.max(dp[i][0], 1 + dp[j][1]);
                maxLength = Math.max(maxLength, dp[i][0]);
            } else if (nums[i] != nums[j]) {
                // if the numbers are equal, don't do anything
                // if nums[i] is SMALLER than nums[j] then we will consider the LAS ending at 'j' where the
                // last two elements were in ASCENDING order
                dp[i][1] = Math.max(dp[i][1], 1 + dp[j][0]);
                maxLength = Math.max(maxLength, dp[i][1]);
            }
        }
    }
    return maxLength;
};