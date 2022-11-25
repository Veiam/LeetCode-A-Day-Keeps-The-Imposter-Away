// Given a sorted number array and two integers ‘K’ and ‘X’, find ‘K’ closest numbers to ‘X’ in the array.
// Return the numbers in the sorted order. ‘X’ is not necessarily present in the array.

const Heap = require('../../node_modules/collections/heap'); //http://www.collectionsjs.com
function find_closest_elements(arr, K, X) {
    // Since the array is sorted, we can first find the number closest to ‘X’ through Binary Search. Let’s say that number is ‘Y’.
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] === X) {
            return mid;
        }
        if (arr[mid] < X) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    let index = low;
    if (low > 0) {
        index--;
    }

    // The ‘K’ closest numbers to ‘Y’ will be adjacent to ‘Y’ in the array. We can search in both directions of ‘Y’ to find the closest numbers.
    low = index - K, high = index + K;
    // 'low' should not be less than zero
    low = Math.max(low, 0);
    // 'high' should not be greater the size of the array
    high = Math.min(high, arr.length - 1);

    // We can use a heap to efficiently search for the closest numbers.
    // We will take ‘K’ numbers in both directions of ‘Y’ and push them in a Min Heap sorted by their absolute difference from ‘X’.
    // This will ensure that the numbers with the smallest difference from ‘X’ (i.e., closest to ‘X’) can be extracted easily from the Min Heap.
    const minHeap = new Heap([], null, ((a, b) => b[0] - a[0]));
    // add all candidate elements to the min heap, sorted by their absolute difference from 'X'
    for (i = low; i < high + 1; i++) {
        minHeap.push([Math.abs(arr[i] - X), arr[i]]);
    }

    // Finally, we will extract the top ‘K’ numbers from the Min Heap to find the required numbers.
    // we need the top 'K' elements having smallest difference from 'X'
    result = [];
    for (i = 0; i < K; i++) {
        result.push(minHeap.pop()[1]);
    }

    result.sort((a, b) => a - b);
    return result;
}

console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([5, 6, 7, 8, 9], 3, 7)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 6)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 10)}`)


function find_closest_elements(arr, K, X) {
    // To keep the resultant list sorted we can use a Queue
    const result = [];
    // After finding the number closest to ‘X’ through Binary Search
    const index = binary_search(arr, X);
    // we can use the Two Pointers approach to find the ‘K’ closest numbers
    let leftPointer = index, rightPointer = index + 1;
    const n = arr.length;
    for (i = 0; i < K; i++) {
        //  At any stage, whichever number pointed out by the left or the right pointer gives
        // the smaller difference from ‘X’ will be added to our result list.
        if (leftPointer >= 0 && rightPointer < n) {
            const diff1 = Math.abs(X - arr[leftPointer]);
            const diff2 = Math.abs(X - arr[rightPointer]);
            // whenever we take the number pointed out by the left pointer, we will append it at the beginning of the list
            if (diff1 <= diff2) {
                result.unshift(arr[leftPointer]);
                leftPointer -= 1;
            }
            // whenever we take the number pointed out by the right pointer we will append it at the end of the list.
            else {
                result.push(arr[rightPointer]);
                rightPointer += 1;
            }
        } else if (leftPointer >= 0) {
            result.unshift(arr[leftPointer]);
            leftPointer -= 1;
        } else if (rightPointer < n) {
            result.push(arr[rightPointer]);
            rightPointer += 1;
        }
    }

    return result;
}

function binary_search(arr, target) {
    let low = 0,
        high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    if (low > 0) {
        return low - 1;
    }
    return low;
}