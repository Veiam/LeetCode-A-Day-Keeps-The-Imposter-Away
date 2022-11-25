// Given an unsorted array containing numbers, find the smallest missing positive number in it.
const find_first_smallest_missing_positive = function (nums) {
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        // ignore the j outside of our range
        if (j < nums.length && j >= 0 && nums[i] != nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        else {
            i++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1)
            return i + 1;
    }
};

console.log(find_first_smallest_missing_positive([-3, 1, 5, 4, 2]));
console.log(find_first_smallest_missing_positive([3, -2, 0, 1, 2]));
console.log(find_first_smallest_missing_positive([3, 2, 5, 1]));