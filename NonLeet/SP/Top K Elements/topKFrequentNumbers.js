// Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.

const Heap = require('../../node_modules/collections/heap');
const find_k_frequent_numbers = function (nums, k) {

    // find the frequency of each number\
    const hash = {};
    for (let num of nums) {
        if (!(num in hash)) {
            hash[num] = 0;
        }
        hash[num]++;
    }
    const minHeap = new Heap([], null, ((a, b) => b[0] - a[0]));

    // go through all numbers of the numFrequencyMap and push them in the minHeap, which will have
    // top k frequent numbers. If the heap size is more than k, we remove the smallest(top) number
    Object.keys(hash).forEach((num) => {
        minHeap.push([hash[num], num]);
        if (minHeap.length > k) {
            minHeap.pop();
        }
    });

    // create a list of top k numbers
    const topNumbers = [];
    minHeap.forEach((num) => {
        topNumbers.push(num[1]);
    });
    return topNumbers;
};

console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([1, 3, 5, 12, 11, 12, 11], 2)}`)
console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([5, 12, 11, 3, 11], 2)}`)


console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([1, 3, 5, 12, 11, 12, 11], 2)}`)
console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([5, 12, 11, 3, 11], 2)}`)
