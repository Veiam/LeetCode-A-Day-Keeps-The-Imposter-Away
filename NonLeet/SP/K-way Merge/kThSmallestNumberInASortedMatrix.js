const Heap = require('../../node_modules/collections/heap'); //http://www.collectionsjs.com

// Given an  N ∗ N N∗N matrix where each row and column is sorted in ascending order, find the Kth smallest element in the matrix.
const find_Kth_smallest = function (matrix, k) {
  const minHeap = new Heap([], null, ((a, b) => b[0] - a[0]));

  // put the 1st element of each row in the min heap
  // we don't need to push more than 'k' elements in the heap
  for (i = 0; i < Math.min(k, matrix.length); i++) {
    minHeap.push([matrix[i][0], 0, matrix[i]]);
  }

  // take the smallest(top) element form the min heap, if the running count is equal to k' return the number
  // if the row of the top element has more elements, add the next element to the heap
  let numberCount = 0,
    number = 0;
  while (minHeap.length > 0) {
    [number, i, row] = minHeap.pop();
    numberCount += 1;
    if (numberCount === k) {
      break;
    }

    if (row.length > i + 1) {
      minHeap.push([row[i + 1], i + 1, row]);
    }
  }

  return number;
}


console.log(`Kth smallest number is: ${find_Kth_smallest([
  [2, 6, 8],
  [3, 7, 10],
  [5, 8, 11],
], 5)}`);


// two pointer approaches
const find_Kth_smallest = function (matrix, k) {
  const n = matrix.length;
  let start = matrix[0][0], end = matrix[n - 1][n - 1];
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);
    const [count, smaller, larger] = count_less_equal(matrix, mid, matrix[0][0], matrix[n - 1][n - 1]);

    if (count === k) {
      return smaller;
    }
    if (count < k) {
      start = larger; // search higher
    } else {
      end = smaller; // search lower
    }
  }

  return start;
}

function count_less_equal(matrix, mid, smaller, larger) {
  let count = 0,
    n = matrix.length;
  let row = n - 1,
    col = 0;
  while (row >= 0 && col < n) {
    if (matrix[row][col] > mid) {
      // as matrix[row][col] is bigger than the mid, let's keep track of the
      // smallest number greater than the mid
      larger = Math.min(larger, matrix[row][col]);
      row -= 1;
    } else {
      // as matrix[row][col] is less than or equal to the mid, let's keep track of the
      // biggest number less than or equal to the mid
      smaller = Math.max(smaller, matrix[row][col]);
      count += row + 1;
      col += 1;
    }
  }

  return [count, smaller, larger];
}


console.log(`Kth smallest number is: ${find_Kth_smallest([
  [1, 4],
  [2, 5],
], 2)}`);

console.log(`Kth smallest number is: ${find_Kth_smallest([
  [-5],
], 1)}`);

console.log(`Kth smallest number is: ${find_Kth_smallest([
  [2, 6, 8],
  [3, 7, 10],
  [5, 8, 11],
], 5)}`);

console.log(`Kth smallest number is: ${find_Kth_smallest([
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
], 8)}`);