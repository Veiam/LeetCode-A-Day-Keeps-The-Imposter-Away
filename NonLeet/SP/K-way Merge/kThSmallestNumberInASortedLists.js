const Heap = require('../../node_modules/collections/heap'); //http://www.collectionsjs.com

// Given ‘M’ sorted arrays, find the K’th smallest number among all the arrays.
const find_Kth_smallest = function (lists, k) {
  // create a min heap
  minHeap = new Heap([], null, ((a, b) => b[0] - a[0]));

  // put the 1st element of each list in the min heap
  for (let i = 0; i < lists.length; i++) {
    minHeap.push([lists[i][0], 0, lists[i]]);
  }

  // take the smallest(i.e., top) element form the min heap, if the running count is equal to k return the number
  let numberCount = 0, number = 0;
  // while minHeap is not empty
  while (minHeap.length > 0) {
    [number, i, list] = minHeap.pop();
    numberCount += 1;
    if (numberCount === k) {
      break;
    }
    // if the array of the top element has more elements, add the next element to the heap
    if (list.length > i + 1) {
      minHeap.push([list[i + 1], i + 1, list]);
    }
  }

  // return the match
  return number;
}


console.log(`Kth smallest number is: ${find_Kth_smallest([
  [2, 6, 8],
  [3, 6, 7],
  [1, 3, 4],
], 5)}`);

