// Given a set with distinct elements, find all of its distinct subsets.
const find_subsets = function (nums) {
    subsets = [];
    subsets.push([]);
    for (let i = 0; i < nums.length; i++) {
        currentNumber = nums[i];
        const n = subsets.length;
        for (let j = 0; j < n; j++) {
            // create a new subset from the existing subset and insert the current element to it
            const set = subsets[j].slice(0);
            set.push(currentNumber);
            subsets.push(set);
        }
    }
    return subsets;
};

console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3]);
result.forEach((subset) => {
  console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3]);
result.forEach((subset) => {
  console.log(subset);
});