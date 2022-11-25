// Given an array of numbers and a number ‘K’, we need to remove ‘K’ numbers from the array such that we are left with maximum distinct numbers.
const Heap = require('../../node_modules/collections/heap');
const find_maximum_distinct_elements = function (nums, k) {
    // First, we will find the frequencies of all the numbers.
    const freqMap = {};
    // find the frequency of each number
    nums.forEach((num) => {
        if (!(num in freqMap))
            freqMap[num] = 0;
        freqMap[num]++;
    })
    const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
    // Then, push all numbers that are not distinct in a Min Heap based on their frequencies.
    Object.keys(freqMap).forEach((num) => {
        // insert all numbers with frequency greater than '1' into the min-heap
        if (freqMap[num] > 1) {
            minHeap.push([freqMap[num], num]);
        }
    });
    // At the same time, we will keep a running count of all the distinct numbers.
    let distinctNums = Object.keys(freqMap).length - minHeap.length;
    // Following a greedy approach, in a stepwise fashion, we will remove the least frequent number from the heap
    while (k > 0 && minHeap.length > 0) {
        let [freq, num] = minHeap.pop();
        // to make an element distinct, we need to remove all of its occurrences except one
        // see if we can remove all occurrences of a number except one
        k -= freq - 1;

        if (k >= 0) {
            // we will increment our running count of distinct numbers
            distinctNums++;
        }
    }
    return k <= 0 ? distinctNums : distinctNums - k;
};

console.log(`Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements([7, 3, 5, 8, 5, 3, 3], 2)}`)
console.log(`Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements([3, 5, 12, 11, 12], 3)}`)
console.log(`Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements([1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 2)}`)

