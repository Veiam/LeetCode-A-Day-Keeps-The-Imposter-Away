// Given ‘N’ ropes with different lengths, we need to connect these ropes into one big rope with minimum cost.
// The cost of connecting two ropes is equal to the sum of their lengths.

const Heap = require('../../node_modules/collections/heap'); //http://www.collectionsjs.com
const minimum_cost_to_connect_ropes = function (ropeLengths) {
    // add all ropes to the min heap
    const minHeap = new Heap(ropeLengths, null, ((a, b) => b - a));

    // go through the values of the heap, in each step take top (i.e., lowest) rope lengths from the min heap
    // connect them and push the result back to the min heap.
    // keep doing this until the heap is left with only one rope
    let result = 0;
    while (minHeap.length > 1) {
        const temp = minHeap.pop() + minHeap.pop();
        result += temp;
        minHeap.push(temp);
    }

    return result;
}

console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5])}`);
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([3, 4, 5, 6])}`);
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5, 2])}`);