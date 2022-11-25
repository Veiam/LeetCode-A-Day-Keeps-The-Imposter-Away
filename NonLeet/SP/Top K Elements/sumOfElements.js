// Given an array, find the sum of all numbers between the K1’th and K2’th smallest elements of that array.
const Heap = require('../../node_modules/collections/heap'); //http://www.collectionsjs.com
const find_sum_of_elements = function (nums, k1, k2) {
    // insert all numbers in a min heap
    const minHeap = new Heap(nums, null, ((a, b) => b - a));

    // remove k1 small numbers from the min heap
    for (i = 0; i < k1; i++) {
        minHeap.pop();
    }

    let elementSum = 0;
    // sum next k2-k1-1 numbers
    for (i = 0; i < k2 - k1 - 1; i++) {
        //This sum will be our required output.
        elementSum += minHeap.pop();
    }

    return elementSum;
};


console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements([1, 3, 12, 5, 15, 11], 3, 6)}`)
console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements([3, 5, 8, 7], 1, 4)}`)

// max heap variation
function find_sum_of_elements(nums, k1, k2) {
    // We can iterate the array and use a max-heap to keep track of the top K2 numbers.
    const maxHeap = new Heap();
    // keep smallest k2 numbers in the max heap
    for (i = 0; i < nums.length; i++) {
        if (i < k2 - 1) {
            maxHeap.push(nums[i]);
        } else if (nums[i] < maxHeap.peek()) {
            // as we are interested only in the smallest k2 numbers
            maxHeap.pop();
            maxHeap.push(nums[i]);
        }
    }

    // get the sum of numbers between k1 and k2 indices
    // these numbers will be at the top of the max heap
    let elementSum = 0;
    for (i = 0; i < k2 - k1 - 1; i++) {
        elementSum += maxHeap.pop();
    }

    return elementSum;
}


console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements([1, 3, 12, 5, 15, 11], 3, 6)}`);
console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements([3, 5, 8, 7], 1, 4)}`);