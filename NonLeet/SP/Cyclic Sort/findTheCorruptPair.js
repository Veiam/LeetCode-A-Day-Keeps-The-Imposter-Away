// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’.
// The array originally contained all the numbers from 1 to ‘n’, but due to a data error,
// one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.

const find_corrupt_numbers = function (nums) {
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] != nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        else {
            i++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (i + 1 != nums[i]) {
            return [nums[i], i + 1];
        }
    }
};

console.log(find_corrupt_numbers([3, 1, 2, 5, 2]));
console.log(find_corrupt_numbers([3, 1, 2, 3, 6, 4]));