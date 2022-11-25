// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’.
// The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.
const find_all_duplicates = function (nums) {
    duplicateNumbers = [];
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        // place each number at its correct index
        if (nums[i] != nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        else {
            i++;
        }
    }

    // iterate through the array to find all numbers that are not at the correct indices. All these numbers are duplicates.
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            duplicateNumbers.push(nums[i]);
        }
    }

    return duplicateNumbers;
};

console.log(find_all_duplicates([3, 4, 4, 5, 5]));
console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]));