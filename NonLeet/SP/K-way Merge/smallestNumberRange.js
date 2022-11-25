const Heap = require('../../node_modules/collections/heap'); //http://www.collectionsjs.com

// Given ‘M’ sorted arrays, find the smallest range that includes at least one number from each of the ‘M’ lists.
const find_smallest_range = function (lists) {
  // create a min heap
  const minHeap = new Heap([], null, ((a, b) => b[0] - a[0]));
  // initial range values
  let rangeStart = 0, rangeEnd = Infinity, currentMaxNumber = -Infinity;

  // put the 1st element of each array in the min heap
  lists.forEach((list) => {
    minHeap.push([list[0], 0, list]);
    // find the current max number
    currentMaxNumber = Math.max(currentMaxNumber, list[0]);
  });


  // take the smallest(top) element from the min heap, if it gives us smaller range, update the ranges
  // if the array of the top element has more elements, insert the next element in the heap
  while (minHeap.length === lists.length) {
    const [num, i, list] = minHeap.pop();
    if (rangeEnd - rangeStart > currentMaxNumber - num) {
      rangeStart = num;
      rangeEnd = currentMaxNumber;
    }
    if (list.length > i + 1) {
      // insert the next element in the heap
      minHeap.push([list[i + 1], i + 1, list]);
      currentMaxNumber = Math.max(currentMaxNumber, list[i + 1]);
    }
  }

  return [rangeStart, rangeEnd];
}


console.log(`Smallest range is: ${find_smallest_range([
  [1, 5, 8],
  [4, 12],
  [7, 8, 10],
])}`);