// We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’.
// Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

const find_missing_number = function (nums) {
    let fill = Array(nums.length + 1).fill(-1);

    for (let num of nums) {
        fill[num] = num;
    }
    // find the first number missing from its index, that will be our required number
    return fill.indexOf(-1);
};

console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));