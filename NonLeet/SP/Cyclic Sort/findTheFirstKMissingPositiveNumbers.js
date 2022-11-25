// Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.
const find_first_k_missing_positive = function (nums, k) {
    missingNumbers = [];
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] != nums[j] && j < nums.length && j > 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        else {
            i++;
        }
    }

    let max = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            missingNumbers.push(i + 1);
        }
        // to account for missing positive numbers being outside
        // of current range
        max = Math.max(max, nums[i]);
        if (missingNumbers.length == k) {
            return missingNumbers;
        }
    }
    // if we still dont have all the missing numbers
    // then it means we should get more numbers after the
    // max number in the array.
    while (missingNumbers.length != k) {
        missingNumbers.push(++max);
    }
    return missingNumbers;
};

console.log(find_first_k_missing_positive([3, -1, 4, 5, 5], 3));
console.log(find_first_k_missing_positive([2, 3, 4], 3));
console.log(find_first_k_missing_positive([-2, -3, 4], 2));