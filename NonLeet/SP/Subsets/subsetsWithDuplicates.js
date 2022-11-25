
// Given a set of numbers that might contain duplicates, find all of its distinct subsets.
const find_subsets = function (nums) {
    // sort the numbers to handle duplicates
    nums.sort((a, b) => a - b);
    const subsets = [];
    subsets.push([]);
    let prevLength = 0;
    for (let i = 0; i < nums.length; i++) {
        const subsetsLength = subsets.length;
        // if current and the previous elements are same, create new subsets only from the subsets
        let j = nums[i] == nums[i - 1] ? prevLength : 0;
        while (j < subsetsLength) {
            // create a new subset from the existing subset and insert the current element to it
            const set = subsets[j].slice(0);
            set.push(nums[i]);
            subsets.push(set);
            j++;
        }
        // remember the previous length
        prevLength = subsetsLength;
    }
    return subsets;
};


console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3, 3]);
result.forEach((subset) => {
    console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3, 3]);
result.forEach((subset) => {
    console.log(subset);
});
